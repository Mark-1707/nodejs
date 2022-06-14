const conn = require('./db/conn');
const express = require("express");
const cors = require("cors");
const app = express();
const studentRouter = require("./routers/students");

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;


//register the router
app.use(studentRouter);


app.listen(port, "localhost", (req, res)=>{
    console.log(`Server is running on port ${port}`);
});