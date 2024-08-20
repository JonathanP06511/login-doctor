require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  logging: false, 
});

const User = require('./user')(sequelize);

sequelize.sync()
  .then(() => console.log('Sequelize has synchronized with the database'))
  .catch(err => console.error('Error synchronizing with the database:', err));

module.exports = { sequelize, User };
