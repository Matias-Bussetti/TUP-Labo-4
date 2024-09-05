const { Router} = require('express');
const { getEmpleados, getEmpleado } = require('../controllers/empleados');

const rutas = Router();


rutas.get('/', getEmpleados);
rutas.get('/:idEmpleado', getEmpleado);

module.exports = rutas;