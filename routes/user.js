const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");


/**
* @swagger
* /:
*   get:
*       tags:
*       - ver usuarios
*       description: Use to request all customers
*       responses:
*           '200':
*               description: A successful response
*               schema:
*                   type: array
*                   items:
*                       $ref: '#definitions/User'
*           '400':
*               description: "error"  
* definitions:
*   User:
*       type: object
*       required:
*           - name
*           - lastName
*           - age
*           - email
*       properties:
*           name:
*               type: string
*               example: Valentina    
*           lastName:
*               type: string           
*               example: Rodas
*           age:
*               type: number
*               example: 20
*           email:
*               type: string
*               example: valentina@elcorreo.com
*/
router.get("/", function (req, res) {
    userController.list(req, res);
});

router.post("/adduser", function (req, res) {
    userController.create(req, res);
});

module.exports = router;
