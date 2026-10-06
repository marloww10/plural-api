const responsavelModel = require("../models/ResponsavelModel")

async function listarResponsaveis() {
    const responsavel = await responsavelModel.listarResponsaveis();
    return responsavel;
}

async function cadastrarResponsavel(responsavel) {
    if (!responsavel.cpf || !responsavel.nome || !responsavel.email || !responsavel.telefone) {
        throw new Error("é obrigatorio preencher todos os campos")
    }
    return await responsavelModel.cadastrarResponsavel(responsavel);
}

async function deletarResponsavel(id_responsavel) {
    if (!id_responsavel) {
        throw new Error ("envie o id");
    }
    return await responsavelModel.deletarResponsavel(id_responsavel);
}

async function atualizarResponsavel(responsavel, id_responsavel) {
    if (!responsavel.nome || !responsavel.email || !responsavel.cpf || !responsavel.telefone) {
        throw new Error("nome, email, cpf e telefone são obrigatórios")
    }
    return await responsavelModel.atualizarResponsavel(responsavel, id_responsavel);
}

module.exports = {
    listarResponsaveis,
    atualizarResponsavel,
    cadastrarResponsavel,
    deletarResponsavel
}