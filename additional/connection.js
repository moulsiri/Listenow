const mb = require('mongoose');

function connection(connectionString){
  mb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(function () {
    console.log('database connected');
  }).catch(function (err) {
    console.log(err)
  })  
}

module.exports=connection;
