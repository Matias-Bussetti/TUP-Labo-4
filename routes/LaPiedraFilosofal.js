const express = require('express');
const router = express.Router();

// Controlador
const controller = require('../controllers/LaPiedraFilosofal');

// Ruta para obtener un personaje por ID
router.get('/:idPersonaje', controller.getPersonaje);

// Ruta para obtener todos los personajes (máximo 50)
router.get('/', controller.getPersonajes);

// Ruta para obtener personajes filtrados
router.get('/filtrados', controller.getPersonajesFiltrados);

module.exports = router;
