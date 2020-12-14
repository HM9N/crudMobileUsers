const path = require("path");
const User = require("../models/user");

exports.create = (req, res) => {
    const user = new User(req.body);
    console.log(req.body);
    user.save((err) => {
        err
            ? res.status(400).send(err)
            : res.status(200).send("Usuario creado");
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

exports.update = (req, res) => {
    const params = req.body;
    const userId = req.params.id;
    console.log(req.params.id);
    User.findByIdAndUpdate(userId, params, (err, user) => {
        if (err) {
            res.status(500).send({
                message: "Error 500 al actualizar el album",
            });
        } else {
            res.status(200).send(
                `El usuario ${user.name} ${user.lastName} ha sido modificado`
            );
        }
    });
};

exports.delete = (req, res) => {
    const userId = req.params.id;
    console.log(userId);
    User.deleteOne({_id: userId })
        .then(() => {
            res.status(200).send(`El usuario ha sido eliminado`);
        })
        .catch((error) => {
            res.status(400).send({
                message: "No se ha podido eliminar el usuario",
            });
        });
};
