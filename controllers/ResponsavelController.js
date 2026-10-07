const responsavelService = require("../services/ResponsavelService");

async function listarResponsaveis(req, res) {
    try {
        const responsaveis = await responsavelService.listarResponsaveis();
        return res.status(200).json(responsaveis);
    } catch (error) {
        return res.status(400).json({
            mensagem: error.message
        })
    }
}

async function cadastrarResponsavel(req, res) {
    try {
        const responsavel = await responsavelService.cadastrarResponsavel(req.body);
        return res.status(201).json(responsavel);
    } catch (error) {
        return res.status(400).json({
            mensagem: error.message
        })
    }
}

async function deletarResponsavel(req, res) {
    try {
        const responsavel = await responsavelService.deletarResponsavel(req.params.id);
        if (!responsavel) {
            return res.sendStatus(404);
        }

        return res.sendStatus(204);
    } catch (error) {
        return res.status(400).json({
            mensagem: error.message
        })
    }
}

async function atualizarResponsavel(req, res) {
    try {
        const responsavel = await responsavelService.atualizarResponsavel(req.body,req.params.id);
        return res.status(200).json(responsavel);
    } catch (error) {
        return res.status(400).json({
            mensagem: error.message
        })
    }
}

async function buscarResponsavel(req, res) {
    try {
        const responsavel = await responsavelService.buscarResponsavel(req.query.termo);
        return res.status(200).json(responsavel);
    } catch (error) {
        return res.status(500).json({
            mensagem: error.message
        });
    }
}

module.exports = {
    atualizarResponsavel,
    cadastrarResponsavel,
    deletarResponsavel,
    listarResponsaveis,
    buscarResponsavel
}