const fs = require('fs');

fs.mkdir('Mark', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Folder created');
    }
});

fs.writeFile("read.txt", "Hello, I'm Mark", () => {
    console.log("File created successfully");
});

fs.appendFile("read.txt", "I'm working", () => {
    console.log("File updated successfully");
});

fs.readFile("read.txt", "UTF-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

fs.rename("read.txt", "myread.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File renamed successfully");
    }
});

fs.unlink("myread.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File deleted successfully");
    }
});

fs.rmdir("mark", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Folder deleted successfully");
    }
});