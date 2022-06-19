import mysql from 'mysql2/promise';

const config = {
  host: process.env.HOST, 
  user: process.env.USER,
  password: process.env.PASSWORD, 
  database: process.env.DATABASE
}

let pool = mysql.createPool(config);

export { pool };