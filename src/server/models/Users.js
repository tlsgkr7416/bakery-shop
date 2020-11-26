const passwordHash = require('../helpers/passwordHash');

module.exports = function (sequelize, DataTypes) {
    const Users = sequelize.define('Users',
       {
           id: { type: DataTypes.STRING, primaryKey: true },
           password: { type: DataTypes.STRING },
           name: { type: DataTypes.STRING },
           email: { 
               type: DataTypes.STRING,
               validate: {
                   isEmail: true,
               }
             }
       }
    );

    Users.associate = (models) => {

        Users.hasOne(
            models.Carts, 
            {onDelete: 'CASCADE',as: 'Cart', foreignKey: 'user_id', targetKey: 'id'} 
        );
    };

    Users.beforeCreate((users, _) => {
         users.password = passwordHash(users.password);
    });
    
    return Users;
}