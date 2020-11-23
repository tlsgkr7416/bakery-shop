module.exports = function (sequelize, DataTypes) {
    const Products = sequelize.define('Products',
       {
           id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
           name: { type: DataTypes.STRING },
           price: { type: DataTypes.INTEGER },
           picture: { type: DataTypes.STRING },
           content: { type: DataTypes.TEXT },
           kind: { type: DataTypes.STRING},
           salePrice: { type: DataTypes.INTEGER},
           saleDate: { type: DataTypes.STRING},
           saleTime: { type: DataTypes.STRING},
       }
    );

    Products.associate = (models) => {

        Products.belongsToMany(
            models.Carts, 
            {onDelete: 'CASCADE', through: 'productCart'} 
        );

        Products.hasMany(
            models.Replys,
            {as: 'Reply', foreignKey: 'product_id', targetKey: 'id'}
        );
    };
    
    return Products;
}
