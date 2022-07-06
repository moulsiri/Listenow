const multer = require('multer');
const dU = require('datauri/parser');
const path = require('path');
const storage = multer.memoryStorage();
const multerUploads = multer({ storage, fileFilter: fileFilter });
function fileFilter(req, file, cb) {
    // console.log(file)
    if (file.fieldname === 'pic') {
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
            cb(null, true);
        } else {
            cb(null, false);
        }
    } else if (file.fieldname === 'song') {
        // console.log(file.mimetype === 'audio/mpeg')
        if (file.mimetype === 'audio/mpeg' || file.mimetype === 'audio/mp3') {
            cb(null, true);
        } else {
            cb(null, false);
        }
    }
    else {
        cb(null, false);
    }
}

const dUri = new dU()
const dataUri = req => { return dUri.format(path.extname(req.originalname).toString(), req.buffer) };


module.exports = { multerUploads, dataUri };