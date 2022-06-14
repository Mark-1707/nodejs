const mongoose = require("mongoose");
const validator = require("validator");

const studentsSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 3
    },
    email:{
        type : String,
        required : true,
        unique : [true, "This email is already in use"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    phone:{
        type: Number,
        minlength:10,
        maxlength:10,
        required: true,
        unique : [true, "This phone number is already in use"]
    },
    address:{
        type: String,
        required: true
    }
});


const Student = new mongoose.model("Student", studentsSchema);

module.exports = Student;