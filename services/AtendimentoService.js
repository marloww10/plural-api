const atendimentoModel = require("../models/AtendimentoModel");
const alunoModel = require("../models/AlunoModel");

async function listarAtendimentos() {
    const atendimentos = await atendimentoModel.listarAtendimentos();
    if (atendimentos.length === 0) {
        throw new Error("Não existe uma lista de atendimento ainda")
    }
    return atendimentos;  
}

async function listarAtendimentoId(id_atendimento) {
    if (!id_atendimento) {
        throw new Error("envio do id é obrigatório");
    }
    const atendimento = await atendimentoModel.listarAtendimentoId(id_atendimento);

    if (!atendimento) {
        throw new Error("o atendimento não existe")
    }
    return atendimento;
}

async function cadastrarAtendimento(atendimento) {
    if (!atendimento.data_atendimento || !atendimento.id_aluno || !atendimento.id_responsavel) {
        throw new Error("data do atendimento, id do aluno e do responsável são obrigatórios");
    }

    const aluno = await alunoModel.listarAlunoID(atendimento.id_aluno);
    if (!aluno) {
        throw new Error("esse aluno não existe");
    }
    if (aluno.id_responsavel !== atendimento.id_responsavel) {
        throw new Error("o responsável não pertence a esse aluno");
    }

    return await atendimentoModel.cadastrarAtendimento(atendimento);
}

async function atualizarAtendimento(data_atendimento, id_atendimento) {
    if (!id_atendimento) {
        throw new Error("preencha o id do atendimento");
    }
    if (!data_atendimento) {
        throw new Error("data de atendimento é obrigatório");
        
    }

    return await atendimentoModel.atualizarAtendimento(id_atendimento, data_atendimento);
}

async function deletarAtendimento(id_atendimento) {
    if (!id_atendimento) {
        throw new Error("preencha o id do atendimento");
        
    }
    return await atendimentoModel.deletarAtendimento(id_atendimento);
}

module.exports = {
    atualizarAtendimento,
    cadastrarAtendimento,
    deletarAtendimento,
    listarAtendimentoId,
    listarAtendimentos
}