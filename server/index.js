
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors")

// IMPORT ROUTES!
const todos = require("./routes/todoRoutes");

const app = express();
const bodyParser = require("body-parser")


// MIDDLEWARES!
app.use(cors());
app.use(bodyParser.json({limit:"5mb"}));
app.use(bodyParser.urlencoded({limit:"5mb", extended: true}));

app.use('/api',todos);

// LISTING OUR SERVER ON PORT 8080!
app.listen(8080,() => {
    console.log("Server is listening on PORT:",8081)
})