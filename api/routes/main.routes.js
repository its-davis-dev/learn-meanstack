let express = require('express');
let router = express.Router();
let mainController = require('../controllers/main.controller');

// HTTP Verbs: POST, GET, PUT DELETE.

// POST /api/providers
router.post('/providers', mainController.create);

// Get /api/providers
router.get('/providers', mainController.readAll);

// GET One /api/providers/123
router.get('/providers/:id', mainController.readOne);

// PUT /api/providers/123
router.put('/providers', mainController.update);

// DELETE one /api/providers/123
router.delete('/providers/:id', mainController.deleteOne);

// DELETE All /api/providers
router.delete('/providers', mainController.deleteAll);

module.exports = router;
