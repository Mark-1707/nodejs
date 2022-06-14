const conn = require('./db/conn');
const Student = require("./models/students");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("API is working");
})

app.post("/students", async (req, res)=>{
    
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(200).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
});

//read data
app.get("/students", async (req, res)=>{
    try{
        const students = await Student.find();
        res.status(200).send(students);
    }catch(e){
        res.status(400).send(e);
    }
});


app.listen(port, "localhost", (req, res)=>{
    console.log(`Server is running on port ${port}`);
});