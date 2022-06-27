const multer = require('multer');
const dU = require('datauri/parser');
const path = require('path');
const storage = multer.memoryStorage();
const multerUploads = multer({ storage, fileFilter: fileFilter });
function fileFilter(req, file, cb) {
    if (file.fieldname === 'pic') {
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
            cb(null, true);
        } else {
            cb(null, false);
        }
    } else if (file.fieldname === 'song') {
        if (file.mimetype === 'audio/mpeg') {
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