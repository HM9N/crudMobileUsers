const mongoose = require("mongoose");
//const db_link = "mongodb://mongo:27017/crudmobileusersdb";
const db_link = "mongodb://127.0.0.1:27017/mongo";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

module.exports = {
    //se hace la conexión
    connect: () => {
        mongoose
        .set("useCreateIndex", true)
        .connect(db_link, options)
        .then(function () {
            console.log("MongoDB is connected");
        })
        .catch(function (err) {
            console.log(err);
        });
    }

}
