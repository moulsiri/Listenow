const cloudinary = require('cloudinary');
const dotenv = require('dotenv');
dotenv.config();
try {
    cloudinary.config({
        cloud_name: 'appdata',
        api_key: '367148548478113',
        api_secret: 'fsmBt-V3Cjq2ioBz7mQp3t_rw-A'
    });
    // console.log("config")
} catch (err) {
    console.log("errror!")
}


module.exports = cloudinary