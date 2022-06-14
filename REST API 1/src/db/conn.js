const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/students-api",
    {useNewUrlParser: true, useUnifiedTopology: true },
).then(()=>{
    console.log("Database connection established");
})
.catch((e)=>{
    console.log(`Database connection failed ${e}`);
});

// module.exports =