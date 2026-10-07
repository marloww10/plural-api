const alunoController = require("../controllers/AlunoController");
const express = require("express");
const middlewares = require("../middlewares/authMiddleware");

const app = express.Router();

app.get("/", middlewares, alunoController.listarAlunos);
app.get("/:id", middlewares, alunoController.listarAlunoId);
app.post("/", middlewares, alunoController.cadastrarAluno);
app.put("/:id", middlewares, alunoController.atualizarAluno);
app.delete("/:id", middlewares, alunoController.deletarAluno);

module.exports = app;