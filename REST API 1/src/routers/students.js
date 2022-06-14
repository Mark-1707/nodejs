const express = require('express');
const router = new express.Router();
const Student = require("../models/students");

//Define the router
router.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the API" });
});


router.post("/students", async (req, res)=>{
    
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(200).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
});

//read data
router.get("/students", async (req, res)=>{
    try{
        const students = await Student.find();
        res.status(200).send(students);
    }catch(e){
        res.status(400).send(e);
    }
});


//delete student
router.delete("/students/:id", async(req, res) => {
    try{
        const student = await Student.findByIdAndDelete(req.params.id);
        res.status(200).send(student);
    }catch(e){
        res.status(400).send(e);
    }
});


//update student
router.patch("/students/:id", async (req, res) => {
    try{

        const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new : true,
        });
        res.status(200).send(student);
    }catch(e){
        res.status(400).send(e);
    }
});

module.exports = router;