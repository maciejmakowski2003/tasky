const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    logging: false
});

const db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    User: require('../models/User')(sequelize),
};

module.exports = db;