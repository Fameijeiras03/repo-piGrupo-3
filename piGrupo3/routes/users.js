var express = require('express');
var router = express.Router();

const uC = require('../controllers/userController')

router.get('/profile', uC.profile);
router.get('/register', uC.register);
router.get('/loginUsuario', uC.login);

module.exports = router;
