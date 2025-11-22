const historicoService = require('../service/historicoService');

module.exports = {

    async registrarEntrada(req, res) {
        try {
            const { morador_id } = req.body;

            await historicoService.registrarEntrada(morador_id);

            return res.json({ message: "Entrada registrada!" });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Erro ao registrar entrada" });
        }
    },

    async listarPorMorador(req, res) {
        try {
            const { id } = req.params;
            const historico = await historicoService.listarPorMorador(id);

            return res.json(historico);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao buscar histórico" });
        }
    },

    async listarTodos(req, res) {
        try {
            const historico = await historicoService.listarTodos();
            return res.json(historico);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao buscar histórico" });
        }
    }
};
