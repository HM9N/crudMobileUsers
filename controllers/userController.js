const path = require("path");
const User = require("../models/user");

exports.create = (req, res) => {
    const user = new User(req.body);
    console.log(req.body);
    user.save(function (err) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send("Usuario creado");
        }
    });
};

exports.list = (req, res) => {
    User.find({}).exec((err, users) => {
        if (err) {
            return res.status(400).send(err);
        }
        res.status(200).send(users);
    });
};
