const express = require("express");
const router = express.Router();
const countryController = require('../controllers/countryController')

router.get("/", countryController.getAllCountries);
router.get("/:code", countryController.getCountryInfo);


module.exports = router