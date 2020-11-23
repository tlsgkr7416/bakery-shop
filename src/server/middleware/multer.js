const path = require('path');
const imgDir = path.join(__dirname, '../../../public/images');
const fs = require('fs');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, res, callback) => {
        callback(null, imgDir);
    },
    filename: (req, file, callback) => {
        callback(null, 'products-' + Date.now() + '.'+ file.mimetype.split('/')[1]);

    }
})

module.exports = multer({storage});
