const express = require('express');
const router = express.Router();

//ROTAS

const moradorController = require('./controllers/Morador');

//Rotas do controller Morador
router.get('/visualizarMoradores', moradorController.getAllMorador)
router.post('/criarMorador', moradorController.createMorador)
router.put('/editarMorador/:id', moradorController.editMorador)
router.delete('/removerMorador/:id', moradorController.removeMorador)

module.exports = router;