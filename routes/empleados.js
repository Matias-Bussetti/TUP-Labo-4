const { Router } = require("express");
const EmpleadosController = require("../controllers/empleados");

const rutas = Router();

rutas.get("/", EmpleadosController.get);
rutas.get("/:idEmpleado", EmpleadosController.get);

module.exports = rutas;
