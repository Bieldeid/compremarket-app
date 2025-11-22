const db = require("../database/db");

module.exports = {
    async registrarEntrada(morador_id) {
        await db("historico").insert({
            morador_id
        });

        return true;
    },

    async listarPorMorador(morador_id) {
        return await db("historico")
            .where({ morador_id })
            .orderBy("data", "desc");
    },

    async listarTodos() {
        return await db("historico")
            .orderBy("data", "desc");
    }
};
