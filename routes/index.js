var express = require('express');
var router = express.Router();
const mainController = require('../controller/main');

/* GET home page. 
    Se llaman a los cntroladores de dichas rutas.
*/
router.get('/', mainController.home);
router.get('/about', mainController.about);
router.get('/contact', mainController.contact);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/forgot-password', mainController.forgotpassword);

module.exports = router;
