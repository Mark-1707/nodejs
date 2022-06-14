const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/ololympics")
.then(()=>{
    console.log("Connected to Database");
})
.catch(err =>{
    console.log(err);
});