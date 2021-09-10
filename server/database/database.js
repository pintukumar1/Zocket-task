const mysql=require('mysql2')
require('dotenv').config()

const pool = mysql.createPool({
    host: "localhost",
    user: "root", 
    password: `${process.env.PASSWORD}`,
    database:"zocket-db"
})

module.exports = pool.promise()