const db = require('../database/db');

module.exports = {

    async getAllMoradores() {
        return await db('moradores').select('*');
    },

    async getMoradorById(id) {
        return await db('moradores').where({ id }).first();
    },

    async createMorador(data) {
        const {
            nome,
            telefone,
            email,
            apartamento,
            observacao
        } = data;

        const date = new Date();

        const [id] = await db('moradores').insert({
            nome,
            telefone,
            email,
            apartamento,
            observacao,
            dataEntrada: date
        });

        return id;
    },

    async updateMorador(id, data) {
        const {
            nome,
            telefone,
            email,
            apartamento,
            observacao
        } = data;

        await db('moradores')
            .where({ id })
            .update({
                nome,
                telefone,
                email,
                apartamento,
                observacao
            });

        return true;
    },

    async deleteMorador(id) {
        return await db('moradores').where({ id }).del();
    }
};
