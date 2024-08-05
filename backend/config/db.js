const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: ' ',
  database: 'career_assessment'
});

module.exports = pool.promise();


