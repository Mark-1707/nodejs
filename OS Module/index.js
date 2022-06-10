const os = require('os');
console.log(os.arch());
// console.log(os.constants);
console.log(os.hostname());
console.log(os.platform());
console.log(os.release());
console.log(os.type());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.uptime());
console.log(os.userInfo());
console.log(os.tmpdir())

const freeMemory = os.freemem();
console.log(`${freeMemory/1024/1024/1024}`);

const totalMemory = os.totalmem();
console.log(`${totalMemory/1024/1024/1024}`);