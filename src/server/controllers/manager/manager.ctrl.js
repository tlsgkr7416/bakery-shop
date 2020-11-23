const models = require('../../models');

exports.post_product = (req, res) => {
    const files = [];
    for (let file of req.files) {
        files.push(file.filename);
    }
    

    req.body.picture = JSON.stringify(files);
    models.Products.create(req.body);
    res.redirect('/home');
}
