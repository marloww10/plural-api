const db = require('../db');

async function listarUsuarios() {
    const result = await db.query('select id_usuario, nome, email from usuario');
    return result.rows;
}

async function listarUsuarioId(id_usuario) {
    const result = await db.query('select id_usuario, nome, email from usuario where id_usuario = $1', [id_usuario]);
    return result.rows[0];
}

async function cadastrarUsuario(usuario) {
    const sql = 'insert into usuario(nome, email, senha) values ($1, $2, $3) returning id_usuario, nome, email';
    const value = [usuario.nome, usuario.email, usuario.senha];
    const result = await db.query(sql, value);
    return result.rows[0];
}

async function buscarUsuarioEmail(email) {
    const result = await db.query("select * from usuario where email = $1", [email]);
    return result.rows[0];
}

async function atualizarUsuario(id_usuario, usuario) {
    const sql = `
        UPDATE usuario
        SET nome = $1,
            email = $2,
            senha = $3
        WHERE id_usuario = $4
        RETURNING id_usuario, nome, email
    `;

    const values = [
        usuario.nome,
        usuario.email,
        usuario.senha,
        id_usuario
    ];

    const result = await db.query(sql, values);

    return result.rows[0];
}

async function deletarUsuario(id_usuario) {
    const result = await db.query(
        "DELETE FROM usuario WHERE id_usuario = $1",
        [id_usuario]
    );
    return result.rowCount;
}

module.exports = {
    listarUsuarios,
    listarUsuarioId,
    cadastrarUsuario,
    buscarUsuarioEmail,
    atualizarUsuario,
    deletarUsuario
}