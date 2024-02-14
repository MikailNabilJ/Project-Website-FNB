require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
// import middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use database
const sequelize = require('./config/connection');
const {startSequelize} = require('./utils/sequelize');

// use routes
const menuRoutes = require('./routes/menuRoutes');
app.use('/menus', menuRoutes);

const feedbackRoutes = require('./routes/feedbackRoutes');
app.use('/feedbacks', feedbackRoutes);

const donationRoutes = require('./routes/donationRoutes');
app.use('/donations', donationRoutes);

// const userRoutes = require('./routes/userRoutes');
// app.use('/user', userRoutes);


//Menjalankan server dan menghubungkannya dengan basis data:
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await startSequelize(sequelize);
});