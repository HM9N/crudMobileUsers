const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

/**
* @swagger
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


/**
* @swagger
* /:
*   get:
*       tags:
*       - ver usuarios
*       description: ver todos los usuarios
*       responses:
*           '200':
*               description: A successful response
*               schema:
*                   type: array
*                   items:
*                       $ref: '#definitions/User'
*           '400':
*               description: "error"  
*/
router.get("/", (req, res) => {
        userController.list(req, res);
    });

/**
* @swagger
* /adduser:
*           post:
*               tags:
*               - agregar usuario
*               description: agregar un usuario
*               parameters:
*                  - name: user
*                    description: información del usuario
*                    in: body
*                    required: true
*                    type: string
*                    schema:
*                       $ref: '#definitions/User'
*               responses:
*                   '200':
*                       description: usuario agregado
*                   '400':
*                       description: "error"  
*/

router.post("/adduser", (req, res) => {
        userController.create(req, res);
    });

/**
* @swagger
* /user/:id:
*           put:
*               tags:
*               - Modificar usuario
*               description: Modificar usuario
*               responses:
*                   '200':
*                       description: usuario modificado
*                   '500':
*                       description: "error al modificar"  
*/

router.put("/user/:id", (req, res)=> {
    userController.update(req,res);
});

/**
* @swagger
* /user/:id:
*           delete:
*               tags:
*               - borrar usuario
*               description: borrar usuario
*               responses:
*                   '200':
*                       description: usuario eliminado
*                   '400':
*                       description: "error al borrar usuario"  
*/


router.delete("/user/:id", (req,res) => {
    userController.delete(req,res);
});

module.exports = router;
