const { Router } = require('express')
const { getClientes } = require('./../controllers/Clientes')

const rutas = Router()

rutas.get('/', getClientes)

module.exports = rutas

