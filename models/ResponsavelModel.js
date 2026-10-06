const db = require("../db");

async function listarResponsaveis() {
    const result = await db.query("select * from responsavel");
    return result.rows;
}

async function cadastrarResponsavel(responsavel) {
    const sql = "insert into responsavel(nome, cpf, telefone, email) values ($1,$2,$3,$4)";
    const value = [responsavel.nome, responsavel.cpf, responsavel.telefone, responsavel.email];
    const result = await db.query(sql, value);
    return result.rows;
}

async function atualizarResponsavel(responsavel, id_responsavel) {
    const sql = "update responsavel set nome=$1, cpf=$2, telefone=$3, email=$4 where id_responsavel = $5";
    const values = [responsavel.nome, responsavel.cpf, responsavel.telefone, responsavel.email, id_responsavel];
    const result = await db.query(sql, values);
    return result.rowCount;
}

async function deletarResponsavel(id_responsavel) {
    const sql = "delete from responsavel where id_responsavel=$1";
    const value = [id_responsavel];
    const result = await db.query(sql,value);
    return result.rowCount;
}

module.exports = {
    listarResponsaveis,
    cadastrarResponsavel,
    deletarResponsavel,
    atualizarResponsavel
}