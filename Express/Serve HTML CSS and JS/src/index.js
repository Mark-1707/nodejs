const express = require('express')
const path = require('path')
const app = express()

// console.log(__dirname);

const staticPath = path.join(__dirname, '../public');

//Built in middleware
app.use(express.static(staticPath));

app.get('/', (req, res) => {
    
});

app.listen(3001, ()=>{
    console.log("listening on port http://localhost:3001");
})