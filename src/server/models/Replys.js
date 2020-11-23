module.exports = function (sequelize, DataTypes) {
    const Replys = sequelize.define('Replys',
       {
           id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
           userId: { type: DataTypes.STRING },
           name: { type: DataTypes.STRING },
           content: { type: DataTypes.TEXT },
           grade: { type: DataTypes.INTEGER },
       }
    );
    
    return Replys;
}