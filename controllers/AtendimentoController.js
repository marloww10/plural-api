const atendimentoService = require("../services/AtendimentoService");

async function listarAtendimentos(req, res) {
    try {
        const listarAtendimentos = await atendimentoService.listarAtendimentos();
        return res.status(200).json(listarAtendimentos);
    } catch (error) {
        return res.status(500).json({
            mensagem: error.message
        });
    }
}

async function listarAtendimentoId(req, res) {
    try {
        const listarAtendimentoId = await atendimentoService.listarAtendimentoId(req.params.id);
        return res.status(200).json(listarAtendimentoId);
    } catch (error) {
        return res.status(500).json({
            mensagem: error.message
        });
    }
}

async function cadastrarAtendimento(req, res) {
    try {
        const cadastrarAtendimento = await atendimentoService.cadastrarAtendimento(req.body);
        return res.status(201).json({
            mensagem: "atendimento cadastrado com sucesso",
            atendimento: cadastrarAtendimento
        });
    } catch (error) {
        return res.status(500).json({
            mensagem: error.message
        });
    }
}

async function deletarAtendimento(req, res) {
    try {
        const deletarAtendimento = await atendimentoService.deletarAtendimento(req.params.id);

        if (!deletarAtendimento) {
            return res.status(404).json({
                mensagem: "atendimento não encontrado"
            });
        }
        return res.status(200).json({
            mensagem: "atendimento deletado com sucesso"
        });
    } catch (error) {
        return res.status(500).json({
            mensagem: error.message
        });
    }
}

async function atualizarAtendimento(req, res) {
    try {
        const atualizarAtendimento = await atendimentoService.atualizarAtendimento(req.body.data_atendimento, req.params.id);
        if (!atualizarAtendimento) {
            return res.status(404).json({
                mensagem: "atendimento não encontrado"
            });            
        }
        return res.status(200).json(atualizarAtendimento);
    } catch (error) {
        return res.status(500).json({
            mensagem: error.message
        });
    }
}

module.exports = {
    atualizarAtendimento,
    cadastrarAtendimento,
    deletarAtendimento,
    listarAtendimentoId,
    listarAtendimentos
}