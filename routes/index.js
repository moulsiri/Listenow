var express = require('express');
var router = express.Router();
const passport = require('passport');
const local = require('passport-local');
const user = require('./users');
const songs = require('./songs');

// Uploading in cloudinary .
const { multerUploads, dataUri } = require('../Upload/multer');
const cloudinary = require('../Upload/cloudinaryConfig');
const users = require('./users');

// passport authentication 
passport.use(new local(user.authenticate()));
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  else {
    res.redirect("/");
  }

}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', function (req, res) {
  let nUser = new user({
    name: req.body.name,
    username: req.body.username
  })
  user.register(nUser, req.body.password).then(function () {
    passport.authenticate('local')(req, res, function () {
      res.redirect("/profile")
    })
  }).catch(function (e) {
    res.send(e);
  })
})

router.post('/login', passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/'
}), function (req, res, next) { });

router.get('/logout', function (req, res) {
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
})

router.get('/profile', isLoggedIn, async function (req, res) {
  let u = await user.findOne({
    username: req.session.passport.user
  });

  // let s = await song.find({});
  // res.json({ u })
  res.render('profile', { userData: u })
})

router.get('/uploadForm', function (req, res) {
  res.render('upload');
})


//uploading songs
router.post('/uploadSong', isLoggedIn, multerUploads.fields([{ name: 'pic', maxCount: '1' }, { name: 'song', maxCount: '1' }]), async function (req, res) {
  let picLoc = "";
  let songLoc = "";

  if (req.files) {
    const picFile = dataUri(req.files.pic[0]).content;
    const songFile = dataUri(req.files.song[0]).content;
    const sfName = req.files.song[0].originalname.split(".")[0];
    const pfName = req.files.pic[0].originalname.split('.')[0];
    try {
      cloudinary.v2.uploader.upload(picFile.toString(), {
        public_id: `SongPosters/${pfName}`
      }).then(function (data) {
        picLoc = data.url;
        console.log("image uploaded")
        cloudinary.v2.uploader.upload(songFile.toString(), {
          resource_type: 'video',
          public_id: `SongUploads/${sfName}`
        }).then(function (data) {
          songLoc = data.url;
          console.log('song uploaded');
          user.findOne({
            username: req.session.passport.user
          }).then(function (uData) {
            songs.create({
              name: req.body.songName,
              album: req.body.album,
              artist: req.body.artist,
              language: req.body.language,
              sPic: picLoc,
              addedBy: uData._id,
              song: songLoc
            }).then(function (sData) {
              console.log('song database m aagya');
              uData.songAdded.push(sData._id);
              uData.save().then(function (data) {
                res.json({ msg: "kam hogya" });
              })
            }).catch(function (e) {
              console.log('song add krne m error')
              console.log(e);
            })

          }).catch(function (e) {
            console.log('user find karne m error');
            console.log(e)
          })

        }).catch(function (e) {
          console.log('song upload kerne m error');
          console.log(e);
        })
      }).catch(function (e) {
        console.log('image upload kerne m error');
        console.log(e)
      })

    } catch (err) {
      console.log(err);
      res.json({ msg: 'something went wrong' });


    }

  } else {
    res.json({ msg: 'no files' })
  }
})
router.get('/songs', async function (req, res) {
  let songList = await songs.find();
  await res.render('songList', { songs: songList });

})
router.get('/playSong/:id', async function (req, res) {
  let song = await songs.findOne({
    _id: req.params.id
  });
  await res.render('player', { sdata: song })
})

router.get('/likeSong/:id', isLoggedIn, async function (req, res) {
  let uData = await users.findOne({
    username: req.session.passport.user
  })
  let sData = await songs.findById(req.params.id);
  if (sData.Likes.indexOf(uData._id) === -1) {
    sData.Likes.push(uData._id);
    uData.likedSongs.push(sData._id);
  } else {
    sData.Likes.splice(sData.Likes.indexOf(uData._id), 1);
    uData.likedSongs.splice(uData.likedSongs.indexOf(sData._id), 1);
  }
  await sData.save();
  await uData.save();
  await res.redirect(req.headers.referer);


})

module.exports = router;
