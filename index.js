require("dotenv").config();

const express = require("express");

const usuarioRoutes = require("./routes/UsuarioRoute");
const responsavelRoutes = require("./routes/ResponsavelRoute");
const alunoRoutes = require("./routes/AlunoRoute");
const atendimentoRoutes =require("../nodeapi/routes/AtendimentoRoute")

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/usuario", usuarioRoutes);
app.use("/responsavel", responsavelRoutes);
app.use("/aluno", alunoRoutes);
app.use("/atendimento", atendimentoRoutes);

app.listen(port, () => {
    console.log(`backend rodando legal maneiro na porta ${port}`);
});