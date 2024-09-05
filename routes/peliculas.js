const { Router } = require('express');
const { getPeliculas, getEstrenos, getPopulares } = require('../controllers/peliculas')
const rutas = Router();


rutas.get('/estrenos', getEstrenos);
rutas.get('/populares', getPopulares);

module.exports = rutas;
 
