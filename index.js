require('dotenv').config();

const port = process.env.PORT || 3000;
const express = require('express');
const db = require('./db');

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "funcionando legal maneiro show"
    })
})

app.get("/usuario", async (req, res) => {
    const usuario = await db.SelectCustomers();
    res.json(usuario);
})

app.get("/usuario/:id", async (req, res) => {
    const usuario = await db.SelectCustomer(req.params.id);
    res.json(usuario);
})

app.post("/usuario", async (req, res) => {
    await db.InsertCustomers(req.body);
    res.sendStatus(201);
})

app.patch("/usuario/:id", async (req, res) => {
    await db.UpdateCustomers(req.params.id, req.body);
    res.sendStatus(200);
})

app.listen(port);

console.log('backend rodando legal maneiro');