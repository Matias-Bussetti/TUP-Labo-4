const express = require("express");

const router = express.Router();

// Controlador
const PatientsController = require("../controllers/PatientsController");

router.get("/", PatientsController.index);
router.get("/where", PatientsController.where);
router.get("/:id", PatientsController.show);

module.exports = router;
