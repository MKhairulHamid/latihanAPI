const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : 'MySql2020',
    database : 'contoh',
    port: 3306,
    multipleStatements : true
});

module.exports = db;