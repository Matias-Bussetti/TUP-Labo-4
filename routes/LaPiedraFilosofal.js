const express = require("express");

const router = express.Router();

// Controlador
const controller = require("./../controllers/LaPiedraFilosofal");

router.get("/", controller.getPersonaje);
//router.get("/personajes", controller.getPersonajes);


module.exports = router;