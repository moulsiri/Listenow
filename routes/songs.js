const mb = require('mongoose');

const schema = mb.Schema({
    name: String,
    album: String,
    artist: String,
    language: String,
    sPic: {
        type: String,
        default: " "
    },
    Likes: [
        {
            type: mb.Schema.Types.ObjectId,
            ref: 'users'
        }
    ],
    addedBy: {
        type: mb.Schema.Types.ObjectId,
        ref: 'users'
    },
    song: String

});



module.exports = mb.model("songs", schema)