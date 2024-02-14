const { Sequelize } = require('sequelize');
const configDatabase = process.env.MYSQL_URL

const sequelize = new Sequelize(
 configDatabase

);

module.exports = sequelize;
