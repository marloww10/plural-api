const express = require("express")
const middlewares = require("../middlewares/authMiddleware")

const app = express.Router();

const responsavelController = require("../controllers/ResponsavelController")

app.get("/", middlewares, responsavelController.listarResponsaveis);
app.post("/", middlewares, responsavelController.cadastrarResponsavel);
app.put("/:id", middlewares, responsavelController.atualizarResponsavel);
app.delete("/:id", middlewares, responsavelController.deletarResponsavel);

module.exports = app;