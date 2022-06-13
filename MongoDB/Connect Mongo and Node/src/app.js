const mongoose = require('mongoose')
// const express = require('express')

//connection to mongoDB database
mongoose.connect('mongodb://localhost:27017/demo')
.then(()=>console.log('connection successful'))
.catch(err => console.log(err));