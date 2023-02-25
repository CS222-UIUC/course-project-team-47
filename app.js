const mysql = require('mysql2');

require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    port: process.env.MYSQL_LOCAL_PORT,
    user: process.env.MYSQL_ROOT_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3030,
//     user: 'root',
//     database: 'web_db',
//     password: 'pass'
// })

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

connection.end();