const atendimentoController = require("../controllers/AtendimentoController");
const express = require("express");
const middlewares = require("../middlewares/authMiddleware");

const app = express.Router();

app.get("/", middlewares, atendimentoController.listarAtendimentos);
app.get("/:id", middlewares, atendimentoController.listarAtendimentoId);
app.post("/", middlewares, atendimentoController.cadastrarAtendimento);
app.delete("/:id", middlewares, atendimentoController.deletarAtendimento);
app.patch("/:id", middlewares, atendimentoController.atualizarAtendimento);

module.exports = app;