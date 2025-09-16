var express = require('express');
var router = express.Router();

const pC = require('../controllers/productController')
router.get('/', pC.listProducts)

module.exports = router;