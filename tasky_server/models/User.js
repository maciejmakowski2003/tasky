const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const User = sequelize.define("users", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: ""
        }
    }, {
        timestamps: false
    });

    return User;
}