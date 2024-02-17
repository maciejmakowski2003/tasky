const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Task = sequelize.define("tasks", {
        categoryID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        doItUntil: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        done: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    return Task;
}