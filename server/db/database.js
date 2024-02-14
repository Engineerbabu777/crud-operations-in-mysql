
const mysql = require("mysql");


const db = mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"",
   database:"todolist"  
})

// OPENS THE MYSQL CONNECTION!
db.connect((err) => {
  if (err) throw err;
  console.log("DB CONNECTED!")  
})


module.exports = db;