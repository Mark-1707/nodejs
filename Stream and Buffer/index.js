const fs = require('fs');
const http = require('http');

const server = http.createServer();


server.on("request", (req, res) => {
    // fs.readFile("input.txt", (err, data) => {
    //     if (err) {
    //         res.writeHead(404, { 'Content-Type': 'text/html' });
    //         return res.end("404 Not Found");
    //     }else{
    //         res.end(data.toString());
    //     }
    // })

    //Stream Way

    const rstream = fs.createReadStream("input.txt");
    rstream.on("data", (chunkdata)=>{
        res.write(chunkdata)
    });
    rstream.on("end", ()=>{
        res.end();
    });
    
})

server.listen(3001, "localhost");