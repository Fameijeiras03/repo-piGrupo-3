var express = require('express');
var router = express.Router();

const sC = require('../controllers/searchController')
router.get('/',sC.searchResults)




module.exports = router;