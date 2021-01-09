const mysql= require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'steven200404',
    database: 'msclone'
});
module.exports=pool.promise();