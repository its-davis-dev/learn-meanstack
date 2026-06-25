var express = require('express');
var router = express.Router();
const providerController = require('../controller/providers');

/* List Page. 
    Se llaman a los cntroladores de dichas rutas.
*/
router.get('/', providerController.list);

// GET details page
router.get('/details/:id', providerController.details);

// Get edit page
router.get('/edit/:id', providerController.edit);

// POST page
router.post('/update/:id', providerController.update);



module.exports = router;
