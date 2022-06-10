const path = require('path');

console.log(path.dirname("/home/mark/Programming/Nodejs/New/Path Modules/index.js"));
console.log(path.extname("/home/mark/Programming/Nodejs/New/Path Modules/index.js"));
console.log(path.basename("/home/mark/Programming/Nodejs/New/Path Modules/index.js"));

let paths = path.parse("/home/mark/Programming/Nodejs/New/Path Modules/index.js");

console.log(paths.root)
console.log(paths.dir)