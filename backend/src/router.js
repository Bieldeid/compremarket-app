const express = require('express');
const router = express.Router();

//ROTAS

const moradorController = require('./controllers/Morador');

//Rotas do controller Morador
router.get('/visualizarMoradores', moradorController.getAllMorador)
router.post('/criarMorador', moradorController.createMorador)

module.exports = router;