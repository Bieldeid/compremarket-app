const historicoRepository = require('../repositories/historicoRepository');

module.exports = {
    async registrarEntrada(morador_id) {
        return await historicoRepository.registrarEntrada(morador_id);
    },

    async listarPorMorador(id) {
        return await historicoRepository.listarPorMorador(id);
    },

    async listarTodos() {
        return await historicoRepository.listarTodos();
    }
};
