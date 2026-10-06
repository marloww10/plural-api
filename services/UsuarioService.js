const usuarioModel = require("../models/UsuarioModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

async function listarUsuario() {
    const usuarios = await usuarioModel.listarUsuarios();
    if (usuarios.length === 0) {
        throw new Error ("não existe usuarios nessa lista")
    }
    return usuarios;
}

async function listarUsuarioId(id) {
    const usuario = await usuarioModel.listarUsuarioId(id);

    if (!usuario) {
        throw new Error ("usuario não encontrado")
    }
    return usuario;
}

async function cadastrarUsuario(usuario) {
    if (!usuario.nome || !usuario.email || !usuario.senha) {
         throw new Error("Nome, email e senha são obrigatórios");
    }
    const senhaHash = await bcrypt.hash(usuario.senha, 10);
    usuario.senha = senhaHash;
    return await usuarioModel.cadastrarUsuario(usuario);
}

async function loginUsuario(email, senha) {
    const usuario = await usuarioModel.buscarUsuarioEmail(email)

     if (!usuario) {
        throw new Error("senha ou email incorreto")
     }

     const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

     if (!senhaCorreta) {
        throw new Error("senha ou email incorreto")
     }
     const token = jwt.sign(
        {
            id_usuario: usuario.id_usuario,
            email: usuario.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN
        }
     );
     return {
        id_usuario: usuario.id_usuario,
        nome: usuario.nome,
        email: usuario.email,
        token
     }
}

async function atualizarUsuario(id, usuario) {
    const usuarioExistente = await usuarioModel.listarUsuarioId(id);

    if (!usuarioExistente) {
        throw new Error("usuario não encontrado");
    }

    if (!usuario.nome || !usuario.email || !usuario.senha) {
        throw new Error("Nome, email e senha são obrigatórios");
    }

    const senhaHash = await bcrypt.hash(usuario.senha, 10);
    usuario.senha = senhaHash;

    return await usuarioModel.atualizarUsuario(id, usuario);
}

async function deletarUsuario(id) {
    const usuarioExistente = await usuarioModel.listarUsuarioId(id);
    if (!usuarioExistente) {
        throw new Error ("usuario não existe")
    }
    return await usuarioModel.deletarUsuario(id);
}

module.exports = {

    listarUsuario,
    listarUsuarioId,
    cadastrarUsuario,
    loginUsuario,
    atualizarUsuario,
    deletarUsuario
}