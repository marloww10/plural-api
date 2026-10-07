const alunoModel = require("../models/AlunoModel");

async function listarAlunos() {
    const aluno = await alunoModel.listarAlunos();
    return aluno;
}

async function listarAlunoId(id_aluno) {

    if (!id_aluno) {
        throw new Error("envio do ID é obrigatório");
    }
    const aluno = await alunoModel.listarAlunoID(id_aluno);

    if (!aluno) {
        throw new Error("o aluno não existe");
    }
    return aluno;
}

async function cadastrarAluno(aluno) {
    if (!aluno.nome || !aluno.data_nascimento || !aluno.id_responsavel) {
        throw new Error ("nome, data de nascimento e id do responsável são obrigatórios");
    }
    return await alunoModel.cadastrarAluno(aluno);
}

async function deletarAluno(id_aluno) {
    if (!id_aluno) {
        throw new Error("Preencha o id do aluno");
    }
    return await alunoModel.deletarAluno(id_aluno);
}

async function atualizarAluno(aluno, id_aluno) {
    if (!id_aluno) {
        throw new Error("envie o id do aluno");
    }
    if (!aluno.nome || !aluno.data_nascimento || !aluno.id_responsavel) {
        throw new Error("preencha todos os campos");
    }
    return await alunoModel.atualizarAluno(aluno,id_aluno);
}

module.exports = {
    atualizarAluno,
    cadastrarAluno,
    deletarAluno,
    listarAlunoId,
    listarAlunos
};