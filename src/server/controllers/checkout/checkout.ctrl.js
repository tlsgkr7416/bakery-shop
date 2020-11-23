const models = require('../../models');

exports.get_complete = async (req, res) => {
    const { Iamporter } = require('iamporter');
    const iamporter = new Iamporter({
        apiKey: '9688295674592213',
        secret: '36ka67H2JwQWsoBaRc78udxyW7hOGTHK02U69B9S8ZPAnqKeCSn75UF22XRJRztRBoYK07D87sIvTtKw'
    });

    try {
        const iamportData = await iamporter.findByImpUid(req.query.imp_uid);
        const cart = await models.Carts.findOne({
            where: {id: req.query.cartId}
        });

        const checkout = await cart.createCheckout({
            imp_uid : iamportData.data.imp_uid,
            merchant_uid : iamportData.data.merchant_uid,
            paid_amount : iamportData.data.amount,          
            buyer_name : iamportData.data.buyer_name,
            buyer_tel : iamportData.data.buyer_tel,
            buyer_addr : iamportData.data.buyer_addr,
            buyer_postcode : iamportData.data.buyer_postcode,
    
            status : "결재완료",
        });

    } catch(e) {
        console.log(e);
    }

    res.send({message: '성공'});
}