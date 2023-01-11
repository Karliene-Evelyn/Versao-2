const express = require("express");
const { addForm } = require("../controllers/formController.js");
const router = express.Router();

router.post("/add", addForm);

module.exports = router;
