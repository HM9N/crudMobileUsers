//Load express module with `require` directive
var express = require('express');
var app = express();
const port = process.env.PORT || 8081;
const user = require('./routes/user');
const bodyParser = require("body-parser");
const db = require('./db');
//Define request response in root URL (/)
//Launch listening server on port 8081
app.listen(port, function () {
 console.log(`app listening on port ${port}!`)
})

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('',user)

module.exports = app;