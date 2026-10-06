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
        return res.status(201).json(responsavel);
    } catch (error) {
        return res.status(400).json({
            mensagem: error.message
        })
    }
}

async function atualizarResponsavel(req, res) {
    try {
        const responsavel = await responsavelService.atualizarResponsavel(req.body,req.params.id);
        return res.status(201).json(responsavel);
    } catch (error) {
        return res.status(400).json({
            mensagem: error.message
        })
    }
}

module.exports = {
    atualizarResponsavel,
    cadastrarResponsavel,
    deletarResponsavel,
    listarResponsaveis
}