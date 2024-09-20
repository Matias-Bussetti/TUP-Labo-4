const { Router } = require('express');
const { getClientes, getClientesId } = require('./../controllers/Clientes');

const rutas = Router();

//http://localhost:3000/api/v1/clientes
rutas.get('/', getClientes);

//http://localhost:3000/api/v1/clientes/buscar?id=2
rutas.get('/buscar', getClientesId);

module.exports = rutas;

