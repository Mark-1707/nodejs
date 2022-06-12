const express = require('express');

const app = express();

const port = 3001;

app.get('/', (req, res) => {
    res.write('<h1>Welcome to express</h1>');
    res.send();
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/contact', (req, res) => {
    res.status(200).send('Contact page');
});

app.get('/temp', (req, res) => {
    res.json([{
        id: 1,
        name: 'John',
    },
    {
        id: 2,
        name: 'John',
    }]);
});

app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`);
});