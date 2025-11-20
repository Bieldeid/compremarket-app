const moradorRepository = require('../repositories/moradorRepository');

module.exports = {
    async getAllMoradores() {
        return await moradorRepository.getAllMoradores();
    },

    async getMoradorById(id) {
        return await moradorRepository.getMoradorById(id);
    },

    async createMorador(data) {
        return await moradorRepository.createMorador(data);
    },

    async updateMorador(id, data) {
        return await moradorRepository.updateMorador(id, data);
    },

    async deleteMorador(id) {
        return await moradorRepository.deleteMorador(id);
    }
};
