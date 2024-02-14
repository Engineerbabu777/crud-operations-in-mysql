
const express = require("express");
const { createDB,createTable } = require("../controllers/todoController");

const router = express.Router();


// ROUTES!
router.get("/create/database", createDB);
router.get("/create/table", createTable);
module.exports = router;