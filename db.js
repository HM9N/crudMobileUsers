const mongoose = require("mongoose");
const db_link = "mongodb://mongo:27017/crudmobileusersdb";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

module.exports = {
    //se hace la conexión
    connect: () => {
        mongoose
        .connect(db_link, options)
        .then(function () {
            console.log("MongoDB is connected");
        })
        .catch(function (err) {
            console.log(err);
        });
    }

}
