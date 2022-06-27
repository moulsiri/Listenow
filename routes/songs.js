const mb = require('mongoose');
const connectionString = 'mongodb+srv://mouli:1234@cluster0.zwm7d.mongodb.net/Listenow?retryWrites=true&w=majority';
mb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(function () {
    console.log('song database connected');
}).catch(function (err) {
    console.log(err)
})

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