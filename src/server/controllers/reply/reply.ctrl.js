const models = require('../../models');

exports.post_reply = async (req, res) => {
    const product = await models.Products.findByPk(req.body.productId);
    const reply = await product.createReply(req.body);
    res.json(reply);
}

exports.get_reply = async (req, res) => {
    const replys = await models.Replys.findAll({
        where: {product_id: req.query.productId},
        order: [['id', 'DESC']],
    });

    res.json(replys);
}

exports.delete_reply = async (req, res) => {
    const reply = await models.Replys.destroy({
        where: {id: req.query.id}
    });
    res.json(reply);
}