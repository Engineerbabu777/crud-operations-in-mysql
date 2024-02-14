
const mysql = require("mysql");
require("dotenv").config({
    path:"./.env.local"
});

const db = mysql.createConnection({
   host:"localhost",
   user:"root",
   password:process.env.PASS,
   database:"todolist"  
})

// OPENS THE MYSQL CONNECTION!
db.connect((err) => {
  if (err) throw err;
  console.log("DB CONNECTED!")  
})


module.exports = db;