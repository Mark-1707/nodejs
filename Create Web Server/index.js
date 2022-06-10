const http = require('http');

const server = http.createServer((req, res) =>{
    res.end('Hello Omkar');
});

server.listen(8000, "localhost", () => {
    console.log("Listening on port 8000");
});