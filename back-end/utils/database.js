const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'trimium',
    password: '11021102'
});

module.exports = connection;