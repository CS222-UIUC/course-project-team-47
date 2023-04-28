const mysql = require('mysql2');
const { faker } = require('@faker-js/faker');
const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));


require('dotenv').config();

const connection = mysql.createConnection({
    host: "localhost",
    port: process.env.MYSQL_LOCAL_PORT,
    user: process.env.MYSQL_ROOT_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
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

connection.query("SELECT CURDATE()", function (err, res, fields) {
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
/*
const qSelect = 'SELECT * FROM users';
connection.query(qSelect, function (error, results, fields) {
    if (error) throw error;
    console.log(results);
});
*/

// connection.end();

app.get('/', function (req, res) {
    const q = 'SELECT COUNT(*) AS count FROM users';
    connection.query(q, function (error, results) {
        if (error) throw error;
        const count = results[0].count;
        res.render("home", { data: count });
    });
});

app.post('/register', function (req, res) {
    const person = {
        email: req.body.email
    };

    connection.query('INSERT INTO users SET ?', person, function (err, result) {
        if (err) throw err;
        const q = 'SELECT COUNT(*) AS count FROM users';
        connection.query(q, function (error, results) {
            if (error) throw error;
            const count = results[0].count;
            const waitingDays = Math.floor(count / 47);
            const waitingHours = count % 100;
            res.send("Thanks for joining our waitlist! </br>" + "The estimated waiting time is " + waitingDays + " days and " + waitingHours + " hours");
        });
    });
});

app.get("/joke", function (req, res) {
    let joke = "<strong>Why don't scientists trust atoms?</strong> <em>Because they make up everything!</em>";
    res.send(joke);
});
app.get("/random_num", function (req, res) {
    let num = Math.floor((Math.random() * 10) + 1);
    res.send("Your lucky number is... </br>" + num);
});

const PORT = 3000;
app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});
