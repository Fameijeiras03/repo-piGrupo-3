var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const mC = require('../controllers/mainController')

router.get('/', mC.index)
router.get('/index', mC.index)
router.get('/search', mC.search)




module.exports = router;
