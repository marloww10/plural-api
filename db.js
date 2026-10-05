async function connect() {

    if (global.connection) {
        return global.connection;
    }

    const { Pool } = require("pg");
    const pool = new Pool ({
        connectionString: process.env.CONNECTION_STRING
    });

    const client = await pool.connect();
    console.log("criando o pool de conexão legalzinho");

    const res = await client.query("select now()");
    console.log(res.rows[0]);
    client.release();

    global.connection = pool;
    return pool;
}

connect();

async function SelectCustomers() {
    const client = await connect();
    const res= await client.query("select * from usuario");
    return res.rows;
}

async function SelectCustomer(id_usuario) {
    const client = await connect();
    const res= await client.query("select * from usuario where id_usuario =$1", [id_usuario]);
    return res.rows;
}

async function InsertCustomers(customer) {
    const client = await connect();
    const sql = "insert into usuario (nome,email,senha) values ($1, $2, $3)";
    const values = [customer.nome, customer.email, customer.senha];
    const res = await client.query(sql, values);
    return res.rows;
}

async function UpdateCustomers(id_usuario, customer) {
    const client = await connect();
    const sql = "update usuario set nome=$1, email=$2, senha=$3 where id_usuario=$4";
    const values = [customer.nome, customer.email, customer.senha, id_usuario];
    const res = await client.query(sql, values);
    return res.rows;
}

module.exports = {
    SelectCustomers,
    SelectCustomer,
    InsertCustomers,
    UpdateCustomers
}