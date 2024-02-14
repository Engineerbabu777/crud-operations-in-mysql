

const db = require("../db/database");


// CREATE DB!
exports.createDB = (req,res) => {
    let q = 'CREATE DATABASE todolist';
    db.query(q,(err,result) => {
      if(err) throw err;
      return res.status(201).json("DB CREATED!")  
    })
}


// CREATE TABLE!
exports.createTable = (req,res) => {
    let q = 'CREATE TABLE todos(id int AUTO_INCREMENT, firstName VARCHAR(255), lastName VARCHAR(255), email VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id))';

    db.query(q,(err,result) => {
      if (err) throw err;
      return res.status(201).json("TABLE CREATED!")  
    })
}