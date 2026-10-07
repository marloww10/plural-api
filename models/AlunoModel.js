const db = require("../db");

async function listarAlunos() {
    const result = await db.query("select * from aluno");
    return result.rows;
}

async function listarAlunoID(id_aluno) {
    const result = await db.query("select * from aluno where id_aluno=$1", [id_aluno]);
    return result.rows[0];
}

async function cadastrarAluno(aluno) {
    const sql = ("insert into aluno (nome, data_nascimento, id_responsavel) values ($1,$2,$3) returning *");
    const values = [aluno.nome, aluno.data_nascimento, aluno.id_responsavel];
    const result = await db.query(sql, values);
    return result.rows[0];
}

async function deletarAluno(id_aluno) {
    const result = await db.query("delete from aluno where id_aluno=$1", [id_aluno]);
    return result.rowCount;
}

async function atualizarAluno(aluno, id_aluno) {
    const sql = ("update aluno set nome=$1, data_nascimento = $2, id_responsavel = $3 where id_aluno = $4");
    const values = [aluno.nome, aluno.data_nascimento, aluno.id_responsavel, id_aluno];
    const result = await db.query(sql, values);
    return result.rowCount;
}

module.exports = {
    atualizarAluno,
    cadastrarAluno,
    deletarAluno,
    listarAlunoID,
    listarAlunos
}