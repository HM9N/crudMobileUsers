//Load express module with `require` directive
const express = require("express");
const app = express();
const port = process.env.PORT || 8081;
const user = require("./routes/user");
const bodyParser = require("body-parser");
const db = require("./db");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "CrudMobileUsers API",
            description: "API para manejo de usuarios en una aplicación móvil",
            contact: {
                name: "hm9n",
            },
            servers: ["http://localhost:8081"],
        },
    },
    apis: ["./routes/user.js"],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Launch listening server on port 8081
app.listen(port, function () {
    console.log(`app listening on port ${port}!`);
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("", user);

module.exports = app;
