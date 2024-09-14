const express = require("express");

const router = express.Router();

// Controlador
const PatientsController = require("../controllers/PatientsController");

router.get("/", PatientsController.index);
router.get("/:zip", PatientsController.show);
router.get("/where", PatientsController.parameters);

module.exports = router;
