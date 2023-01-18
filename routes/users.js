const connectionString = 'mongodb+srv://mouli:1234@cluster0.zwm7d.mongodb.net/Listenow?retryWrites=true&w=majority';
const mb = require('mongoose');
const plm = require("passport-local-mongoose");





const Schema = mb.Schema({
  name: {
    type: String,
    default: "default"
  },
  username: {
    type: String,
    unique: true
  },
  password: String,
  songAdded: [{
    type: mb.Schema.Types.ObjectId,
    ref: 'songs'
  }],
  likedSongs: [
    {
      type: mb.Schema.Types.ObjectId,
      ref: 'songs'
    }
  ]

})
Schema.plugin(plm);
module.exports = mb.model("users", Schema);
