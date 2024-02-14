const { DataTypes } = require('sequelize');
const sequelize =require('../config/connection');

const Donation = sequelize.define('Donation',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.TEXT,
  category: DataTypes.STRING,
  amount: DataTypes.INTEGER,
  message: DataTypes.TEXT,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});

module.exports =  Donation;