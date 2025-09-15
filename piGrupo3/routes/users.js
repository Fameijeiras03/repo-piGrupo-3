var express = require('express');
var router = express.Router();

const uC = require('../controllers/userController')

router.get('/profile', uC.profile);

module.exports = router;
