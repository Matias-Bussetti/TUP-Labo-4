const { Router } = require('express');
const { getClientes, getClientesId, getClientesByGenero, getClientesByName } = require('./../controllers/Clientes');

const rutas = Router();

// http://localhost:3000/api/v1/clientes
rutas.get('/', getClientes);

// http://localhost:3000/api/v1/clientes/buscar?id=2
rutas.get('/buscar', getClientesId);

// http://localhost:3000/api/v1/clientes/genero?genero=female
rutas.get('/genero', getClientesByGenero);

// http://localhost:3000/api/v1/clientes/nombre?nombre=juan
rutas.get('/nombre',  getClientesByName);

module.exports = rutas;