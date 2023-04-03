const express = require('express')
const app = express()
const port = 3000
const pg = require("pg");
const pool = new pg.Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "postgres",
    password: "admin",
    port: "5432"
});




app.get('/', (req, res) => {
    pool.query("SELECT * FROM users", (err, result) => {
        console.log(err, result);
        res.send(result.rows)
        pool.end();
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})