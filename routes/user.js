const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", function (req, res) {
    userController.list(req, res);
});

router.post("/adduser", function (req, res) {
    userController.create(req, res);
});

module.exports = router;
