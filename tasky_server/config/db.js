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

const User = require('../models/User')(sequelize);
const Task = require('../models/Task')(sequelize);
const Event = require('../models/Event')(sequelize);
const Category = require('../models/Category')(sequelize);

User.hasMany(Task, {foreignKey: 'userID'});
Task.belongsTo(User, {foreignKey: 'userID'}); 

User.hasMany(Event, {foreignKey: 'userID'});
Event.belongsTo(User, {foreignKey: 'userID'});

Category.hasMany(Task, {foreignKey: 'categoryID'});
Task.belongsTo(Category, {foreignKey: 'categoryID'});

const db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    User: User,
    Task: Task,
    Event: Event,
};

module.exports = db;