const moradorService = require('../service/moradorService');

module.exports = {
    async getAllMorador(req, res) {
        try {
            const moradores = await moradorService.getAllMoradores();
            res.json(moradores);
        } catch (error) {
            console.error("Erro ao listar moradores:", error);
            res.status(500).json({ error: "Erro ao listar moradores" });
        }
    },

    async createMorador(req, res) {
        try {
            const data = req.body;

            data.foto_normal = req.files?.foto_normal?.[0]?.filename || null;
            data.foto_neutra = req.files?.foto_neutra?.[0]?.filename || null;

            const result = await moradorService.createMorador(data);

            res.status(201).json({
                message: "Morador criado com sucesso",
                data: result
            });

        } catch (err) {
            console.error("Erro ao criar morador: ", err);
            res.status(400).json({ error: err.message });
        }
    },

    async editMorador(req, res){
        const {id} = req.params
        const data = req.body
        try {
            const result = await moradorService.updateMorador(id, data);
            res.status(201).json({message: 'morador editado',data:result})
        } catch (err){
            console.error('erro ao editar morador: ', err)
            res.status(400).json({error: err.message})
        }
    },

    async removeMorador(req,res){
        const {id} = req.params
        try{
            const result = await moradorService.deleteMorador(id);
            res.status(201).json({message: 'morador removido ', data:result})
        } catch (err){
            console.error('erro ao remover morador: ', err)
            res.status(400).json({error: err.message})
        }
    }
};
