module.exports = function (sequelize, DataTypes) {
    const Carts = sequelize.define('Carts',
       {
           id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
       }
    );

    Carts.associate = (models) => {

        Carts.belongsToMany(
            models.Products, 
            {onDelete: 'CASCADE', through: 'productCart'} 
        );

        Carts.hasMany(
            models.Checkouts,
            {as: 'Checkout', foreignKey: 'cart_id', targetKey: 'id'}
        )
    };
    
    return Carts;
}