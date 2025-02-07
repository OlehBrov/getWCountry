const express = require("express");
const router = express.Router();
const detailsCountryController = require('../controllers/detailsController')

router.get("/flag/:country", detailsCountryController.getFlag);
router.get("/population/:country", detailsCountryController.getPopulation);


module.exports = router