const fs = require('fs');

const data = {
    name : "Omkar",
    age : 26,
    channel : "Mark"
}

// console.log(data)
// console.log(data.name)

// const jsonData = JSON.stringify(data)
// console.log("JSON data : " + jsonData)

// const objData = JSON.parse(jsonData)
// console.log("Object data : " + objData.channel)

const jsonData = JSON.stringify(data);

fs.writeFile("readFile.json", jsonData, (err) => {
    console.log("Done")
});

fs.readFile("readFile.json", "utf8", (err, mydata) => {
    console.log(mydata);
    const orgData = JSON.parse(mydata);
    console.log(orgData)
})