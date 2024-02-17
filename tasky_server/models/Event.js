const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Event = sequelize.define("events", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        from: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        to: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    return Event;
}