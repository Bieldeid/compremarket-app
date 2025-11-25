const express = require('express');
const router = express.Router();

//ROTAS
const moradorController = require('./controllers/Morador');
const historicoController = require('./controllers/Historico');

//Rotas do controller Morador
router.get('/visualizarMoradores', moradorController.getAllMorador)
router.post('/criarMorador', 
    upload.fields([
        {name: "foto_normal", maxCount:1},
        {name: "foto_neutra", maxCount:1}
    ]),
    moradorController.createMorador
)
router.put('/editarMorador/:id', moradorController.editMorador)
router.delete('/removerMorador/:id', moradorController.removeMorador)

//Rotas do controller histórico
router.post('/historico/entrada', historicoController.registrarEntrada);
router.get('/historico', historicoController.listarTodos);
router.get('/historico/morador/:id', historicoController.listarPorMorador);

module.exports = router;