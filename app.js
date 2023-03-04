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

connection.query('SELECT CURDATE()', function (err, res, fields) {
    if (err) throw err;
    console.log(res);
});

// Selecting Data
const q = 'SELECT * FROM users';
connection.query(q, function (error, results, fields) {
    if (error) throw error;
    console.log(results);
});

connection.end();