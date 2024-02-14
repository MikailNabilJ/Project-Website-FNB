// services/userService.js
const db = require('../db');
const User = require('../models/userModel')(db);

exports.register = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            throw err;
        }
        password = hash;

        return User.create({ username, password, email });
    });
};

exports.auth = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    return User.findOne({ where: { username } })
        .then(user => {
            if (!user) {
                return res.status(400).send({
                    message: "User Not Found with username " + username
                });
            }

            return bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) {
                    throw err;
                }
                if (isMatch) {
                    const token = jwt.sign({ id: user.id }, 'your-secret-key', {
                        expiresIn: 86400 // expires in 24 hours
                    });
                    res.json({ auth: true, token: token });
                } else {
                    res.status(400).send({
                        message: "Wrong Password for user with username " + username
                    });
                }
            });
        })
        .catch(err => {
            return res.status(500).send({
                message: "Error retrieving user with username " + username
            });
        });
};