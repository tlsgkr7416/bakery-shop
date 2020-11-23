module.exports = function (sequelize, DataTypes) {
    const ProductCart = sequelize.define('productCart',
        { 
           purchaseQuantity: { type: DataTypes.INTEGER}
        },{
            tableName: 'productCart'
        }
    );

    return ProductCart;
}