require("dotenv").config();

const express = require("express");

const usuarioRoutes = require("./routes/UsuarioRoute");
const responsavelRoutes = require("./routes/ResponsavelRoute");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "funcionando legal maneiro show"
    });
});

app.use("/usuario", usuarioRoutes);
app.use("/responsavel", responsavelRoutes);

app.listen(port, () => {
    console.log(`backend rodando legal maneiro na porta ${port}`);
});