const mysql = require('mysql2');
const { faker } = require('@faker-js/faker');

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

// Inserting data 1
// const qInsert = 'INSERT INTO users (email) VALUES ("uiuc@illinois.edu")';
// connection.query(qInsert, function (error, results, fields) {
//     if (error) throw error;
// });

// Inserting data 2
// const person = { email: 'elonmusk@tesla.com' };
// connection.query('INSERT INTO users SET ?', person, function (error, result) {
//     if (error) throw error;
// });

// Insert data 3 (faker)
// const personFaker = {
//     email: faker.internet.email(),
//     created_at: faker.date.past()
// };
// connection.query('INSERT INTO users SET ?', personFaker, function (error, result) {
//     if (error) throw error;
// });

// Inserting 500 users (faker)
let data = [];
for (let i = 0; i < 500; i++) {
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}
const q = 'INSERT INTO users (email, created_at) VALUES ?';
connection.query(q, [data], function (error, result) {
    if (error) throw error;
});

// Selecting Data
const qSelect = 'SELECT * FROM users';
connection.query(qSelect, function (error, results, fields) {
    if (error) throw error;
    console.log(results);
});

connection.end();