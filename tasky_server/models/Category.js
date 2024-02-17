const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Category = sequelize.define("categories", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false
    });

    return Category;
}