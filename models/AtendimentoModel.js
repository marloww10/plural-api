const db = require("../db");

async function listarAtendimentos() {
    const result = await db.query("select * from atendimento")
    return result.rows;
}

async function listarAtendimentoId(id_atendimento) {
    const result = await db.query("select * from atendimento where id_atendimento = $1", [id_atendimento]);
    return result.rows[0];
}

async function cadastrarAtendimento(atendimento) {
    const sql = ("insert into atendimento (data_atendimento, descricao, id_aluno, id_responsavel) values ($1,$2,$3,$4) returning *");
    const value = [atendimento.data_atendimento, atendimento.descricao, atendimento.id_aluno, atendimento.id_responsavel];
    const result = await db.query(sql, value);
    return result.rows[0];
}

async function deletarAtendimento(id_atendimento) {
    const result = await db.query("delete from atendimento where id_atendimento = $1", [id_atendimento]);
    return result.rowCount;
}

async function atualizarAtendimento(data_atendimento, id_atendimento) {
    const result = await db.query("update atendimento set data_atendimento = $1 where id_atendimento = $2 returning *", [data_atendimento, id_atendimento]);
    return result.rows[0];
}

module.exports = {
    atualizarAtendimento,
    cadastrarAtendimento,
    deletarAtendimento,
    listarAtendimentoId,
    listarAtendimentos
}