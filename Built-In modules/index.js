const fs = require("fs")

fs.writeFileSync("read.txt", "Welcome! Happy coding!")

fs.appendFileSync("read.txt", "Keep Learning!")

const buffer_data = fs.readFileSync("read.txt")
console.log(buffer_data)

const org_data = buffer_data.toString()
console.log(org_data)

//Rename the file
fs.renameSync("read.txt", "ReadWrite.txt")