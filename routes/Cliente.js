const { Router } = require('express')
const { getClientes } = require('../controllers/ClienteController')

const rutas = Router()

rutas.get('/', getClientes)

module.exports = rutas