

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

// CREATE LIST!
exports.createList = (req,res) => {
    let q = 'INSERT INTO todos SET ?';

    const {firstName,lastName,email,password} = req.body;

    db.query(q,{firstName,lastName,email,password},(err,result) => {
        if(err) throw err;

        return res.status(201).json(result)
    })
}

// GET ALL LIST!
exports.getLists = (req,res) => {
    let q = "SELECT * from todos";

    db.query(q,(err,result) => {
      if(err) throw err;
      return res.status(200).json(result)
    })
}

exports.getSpecific = (req,res) => {
    let q = "SELECT * from todos WHERE id = ?";
    db.query(q,[req.params.id],(err,result) => {
      if(err) throw err;
      
      return res.status(200).json(result);
    })
}

// UPDATE SPECIFIC!
exports.updateAny = (req,res) => {
    let q = "UPDATE todos SET ? WHERE id = ?";

    db.query(q,[req.body,req.params.id],(err,result) => {
        if(err) throw err;

        return res.status(200).json(result);
    })
}

exports.deleteAny = (req,res) => {
    let q = "DELETE FROM todos WHERE id = ?";
    db.query(q,[req.params.id],(err,result) => {
       if(err) throw err;
       
       return res.status(200).json("Task has been deleted!")
    })
}