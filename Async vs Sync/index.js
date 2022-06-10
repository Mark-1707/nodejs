const fs = require('fs');

//fs.writeFileSync("read.txt", "Today is Awsome Day");

// const data = fs.readFileSync("read.txt", "utf-8");
// console.log(data)

fs.readFile("read.txt", "UTF-8", (err, data) => {
    console.log("Data : "+data, "Error: " + err);
})

console.log("after the data")