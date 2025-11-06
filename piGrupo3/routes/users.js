var express = require('express');
var router = express.Router();

const uC = require('../controllers/userController')

router.get('/register', uC.register);
router.post('/register', uC.create);
router.get('/login', uC.showLogin);
router.post('/login', uC.login);
router.get('/logout', uC.logout)


module.exports = router;
