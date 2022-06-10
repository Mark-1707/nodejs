const http = require('http');

const server = http.createServer((req, res) => {
    
    if(req.url === '/'){
        res.end("I'm root")
    }else if(req.url === '/about'){
        res.end("I'm about")
    }else if(req.url === '/contact'){
        res.end("I'm contact")
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end("<h1>404<h1>")
    }
});

server.listen(8000, "localhost", ()=>{
    console.log("Listening on port 8000");
});