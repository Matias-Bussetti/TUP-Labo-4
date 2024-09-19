const express = require("express");

const router = express.Router();

// Controlador
const SampleController = require("./../controllers/SampleController");

router.get("/", SampleController.getA);
router.get("/b", SampleController.getB);
router.get("*", SampleController.getC);

module.exports = router;
