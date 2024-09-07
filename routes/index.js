const express = require("express");

const router = express.Router();

//Rutas
const sample = require("./sample");

router.use("/sample", sample);
router.get("*", (req, res) => {
  res.json({
    status: 404,
    msg: "not found",
  });
});

module.exports = router;
