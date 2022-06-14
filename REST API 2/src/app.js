require("./db/conn");
const express = require('express');
const cors = require('cors');
const app = express();
const men = require("./routers/men");

const port = process.env.PORT || 3001;"TMDB ID of movie (integer)"

app.use(cors());
app.use(express.json());

app.use(men)

app.listen(port, "localhost", ()=>{
    console.log(`Server is running on port ${port}`);
});