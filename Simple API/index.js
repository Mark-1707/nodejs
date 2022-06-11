const http = require('http');
const fs = require('fs');

const port  = 3001;
const host = 'localhost';

const server = http.createServer((req, res) => {

    const data = fs.readFileSync(`${__dirname}/userapi.json`, 'utf8');
    const objData = JSON.parse(data)
    console.log(objData) 

    if(req.url == "/"){
        res.end("Hello, I'm Root!");
    }else if(req.url == "/userapi"){
        // fs.readFile(`${__dirname}/userapi.json`, "utf-8" ,(err, data) => {
        //     if(err){
        //         console.log(err)
        //     }else{
        //         const objData = JSON.parse(data);
        //         console.log(objData)
        //     }

        //     res.end(data);
        // });
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(objData[2].name);
        //res.end("API is Working!");
    }else{
        res.writeHead(404, {"content-type": "text/html"});
        res.end("Page not found!");
    }
});

server.listen(port, host, () => {
    console.log(`Server is running on ${host}:${port}`);
});