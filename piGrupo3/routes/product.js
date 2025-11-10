var express = require('express');
var router = express.Router();

const pC = require('../controllers/productController')
router.get('/', pC.listProducts)
router.get('/productAdd',pC.productAdd)
router.get('/product/:id', pC.productDetail)
router.post('/product/comentario', pC.crearComentario)
router.get('/searchResults',pC.searchResults)
router.post('/product/store', pC.productStore);



module.exports = router;