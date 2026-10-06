const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");

const app = express.Router();

const usuarioController = require("../controllers/UsuarioController")

app.get("/", authMiddleware, usuarioController.listarUsuarios);

app.get("/:id", authMiddleware, usuarioController.listarUsuarioId);

app.post("/", usuarioController.cadastrarUsuario);

app.post("/login", usuarioController.loginUsuario);

app.put("/:id",authMiddleware, usuarioController.atualizarUsuario);

app.delete("/:id",authMiddleware, usuarioController.deletarUsuario);

module.exports = app;