const fs = require('fs');

fs.writeFile('read.txt', "Today is Awsome Day", (err) => {
    console.log("File is Created" + err);
});

// fs.appendFile('read.txt', "Hello, I'm next Data", (err) => {
//     console.log("Append Completed")
// })

fs.readFile('read.txt', "utf-8", (err, data) => {
    console.log(data + ": " + err)
});