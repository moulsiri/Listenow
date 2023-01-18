let dotenv=require('dotenv');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cloudinary = require('cloudinary');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const connection=require('./additional/connection')
const passport = require("passport");
const expressSession = require('express-session');
let socketFile = require('./additional/socketlog');

var app = express();

//environment variable
if(process.env.NODE_ENV!=='PRODUCTION'){
  dotenv.config({path:'config/.env'});
}

//cloudinary config
try {
  cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUD_API_KEY,
      api_secret: process.env.CLOUD_SECRET
  });
} catch (err) {
  console.log("errror!")
}

//passport js setup
app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: "listenow"
}))
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(usersRouter.serializeUser());
passport.deserializeUser(usersRouter.deserializeUser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//socket in routes
app.set('socket', socketFile.io);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

connection(process.env.MONGO_URI)

module.exports = app;
