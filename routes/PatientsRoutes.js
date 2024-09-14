const express = require("express");

const router = express.Router();

// Controlador
const PatientsController = require("../controllers/PatientsController");

router.get("/", PatientsController.index);
router.get("/:id", PatientsController.show);
router.get("/where", PatientsController.parameters);

module.exports = router;
