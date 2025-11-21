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

    async createMorador(req, res){
        try {
            const result = await moradorService.createMorador(req.body);
            res.status(201).json({message: 'morador criado ', data: result})
        } catch (err){
            console.error('Erro ao criar morador: ', err)
            res.status(400).json({error: err.message})
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
