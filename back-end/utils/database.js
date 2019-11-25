const mysql = require('mysql');
const config = require('../app.config')

const pool = mysql.createPool(config.dbConfig);

exports.pool = pool;