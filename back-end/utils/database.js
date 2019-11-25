const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'trimium',
    password: '11021102'
});

exports.pool = pool;