const models = require('../../models');

exports.get_user = async (req, res) => {
    const user = await models.Users.findOne({
        where: {id: req.user.id}
    });
    
    res.json(user);
}

exports.get_products = async (req, res) => {
    const response = await models.Products.findAll()
        .then(data => data)
        .catch(error => error)
    
    res.json(response);
}
