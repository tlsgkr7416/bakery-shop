const models = require('../../models');

exports.post_cart = async (req, res) => {
    const {productId, cartId, purchaseQuantity} = req.body;
    
    try {
        const product = await models.Products.findOne({
            where: {id: productId}
        });
        // const product = await models.Products.update(
        //     {purchaseQuantity},
        //     {where: {id: productId}}
        // );
        const cart = await models.Carts.findOne({
            where: {id: cartId},
        });

        await cart.addProducts(product, { through: { purchaseQuantity } });
        const result = await models.Carts.findOne({
            where: {id: cartId},
            include: models.Products,
        });
        
        console.log(result);
        res.json(result);
    } catch (e) {
        console.log(e);
    }
}

exports.get_cart = async (req, res) => {
    const user = await models.Users.findOne({
        where: {id: req.user.id},
        include: models.Carts,
    });
    const cart = await models.Carts.findOne({
        where: {id: user.Cart.id},
        include: models.Products,
    });
    
    res.json(cart);
}