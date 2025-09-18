var express = require('express');
var router = express.Router();

const pC = require('../controllers/productController')
router.get('/', pC.listProducts)
router.get('/product-add',pC.productAdd)
router.get('/product/:id', pC.productDetail)




module.exports = router;