const { Router } = require('express');
const { getClientes, getClientesId, getClientesByGenero } = require('./../controllers/Clientes');

const rutas = Router();

// http://localhost:3000/api/v1/clientes
rutas.get('/', getClientes);

// http://localhost:3000/api/v1/clientes/buscar?id=2
rutas.get('/buscar', getClientesId);

// http://localhost:3000/api/v1/clientes/genero?genero=female
rutas.get('/genero', getClientesByGenero);

module.exports = rutas;

