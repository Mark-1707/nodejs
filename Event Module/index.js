const EventEmitter = require('events');

const event = new EventEmitter();

event.on("SayMyName", ()=>{
    console.log("Omkar");
});

event.on("SayMyName", ()=>{
    console.log("Shreyas");
});

event.on("SayMyName", ()=>{
    console.log("Shardul");
});

event.on("CheckMsg", (sc, msg)=>{
    console.log(`${sc}  ${msg}`);
});

event.emit("CheckMsg", 200, "ok");