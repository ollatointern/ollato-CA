const mysql = require('mysql2');

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'testdb',

});

db.connect((err) => {
    if(err) throw err;
    console.log('connect ho gaya server ko !!');
})

module.exports = db;