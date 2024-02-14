// controllers/userController.js
const sequelize =require('../config/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;

exports.register = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            throw err;
        }
        password = hash;

        let sql = `INSERT INTO users (username, password, email) VALUES (?, ?, ?)`;
        let query = db.query(sql, [username, password, email], (err, result) => {
            if (err) {
                throw err;
            }
            res.send('User Registered...');
        });
    });
};

exports.auth = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    let sql = `SELECT * FROM users WHERE username = ?`;
    let query = db.query(sql, [username], (err, results) => {
        if (err) {
            throw err;
        }
        if (results.length > 0) {
            bcrypt.compare(password, results[0].password, (err, isMatch) => {
                if (err) {
                    throw err;
                }
                if (isMatch) {
                    let token = jwt.sign({ id: results[0].id }, secret, {
                        expiresIn: 86400 // expires in 24 hours
                    });
                    res.json({ auth: true, token: token });
                } else {
                    res.send('Wrong Password...');
                }
            });
        } else {
            res.send('User Not Found...');
        }
    });
};