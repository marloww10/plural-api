const usuarioService = require("../services/UsuarioService")

async function listarUsuarios(req, res) {
    try {
        const usuarios = await usuarioService.listarUsuario();
        return res.status(200).json(usuarios);
    } catch (error) {
        return res.status(500).json({
            mensagem: error.message
        });
    }
}

async function listarUsuarioId(req, res) {
    try {
        const usuario = await usuarioService.listarUsuarioId(req.params.id);
        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(404).json({
            mensagem: error.message
        });
    }
}

async function cadastrarUsuario(req, res) {
    try {
        const usuario = await usuarioService.cadastrarUsuario(req.body);
        return res.status(201).json(usuario);
    } catch (error) {
        return res.status(400).json({
            mensagem: error.message
        })
    }
}

async function loginUsuario(req, res) {
    try {
        const { email, senha } = req.body
        const resultado = await usuarioService.loginUsuario(email, senha);
        return res.status(200).json(resultado);
    } catch (error) {
            return res.status(401).json({
            mensagem:error.message
        });
    }
}

async function atualizarUsuario(req, res) {
    try {
        const usuario = await usuarioService.atualizarUsuario(req.params.id, req.body);
        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(400).json({
            mensagem: error.message
        });
    }
}

async function deletarUsuario(req, res) {
    try {
        await usuarioService.deletarUsuario(req.params.id);
        return res.status(204).send();

    } catch (error) {
        return res.status(404).json({
            mensagem: error.message
        });
    }
}

module.exports = {
    listarUsuarios,
    listarUsuarioId,
    cadastrarUsuario,
    loginUsuario,
    atualizarUsuario,
    deletarUsuario
};