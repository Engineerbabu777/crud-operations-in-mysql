
const express = require("express");
const { createDB,createTable, createList, getLists, getSpecific, updateAny, deleteAny } = require("../controllers/todoController");

const router = express.Router();


// ROUTES!
router.get("/create/database", createDB);
router.get("/create/table", createTable);
router.post("/add",createList);
router.get("/all",getLists);
router.get("/s/:id",getSpecific);
router.put("/u/:id",updateAny);
router.delete("/d/:id",deleteAny)
module.exports = router;