const fs = require('fs');

// fs.mkdirSync("mark")

let data = "This is Challenge One. \n"

fs.writeFileSync("read.txt", `${data}`);

data = "adding more data to file...";
fs.appendFileSync("read.txt", `${data}`);

const read_data = fs.readFileSync("read.txt", "utf-8")
console.log(read_data);

fs.renameSync('read.txt', 'myread.txt');

// delete the file
fs.unlinkSync('myread.txt');