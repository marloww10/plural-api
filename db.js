const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING
});

async function connect() {

    if (global.connection) {
        return global.connection;
    }

    const client = await pool.connect();

    console.log("criando o pool de conexão legalzinho");

    const res = await client.query("select now()");
    console.log(res.rows[0]);

    client.release();

    global.connection = pool;

    return pool;
}

connect();

module.exports = pool;