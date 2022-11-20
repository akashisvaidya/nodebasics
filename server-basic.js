console.log("Hello world my first node project");

//common js import
// const EventEmitter = require("events");

//esm
import EventEmitter from "events";
const myEvent = new EventEmitter();
// console.log("first");

//create event, subscribe
myEvent.on("eventName", () => {
  // your code

  console.log("The eventname is fired");
});

myEvent.emit("eventName");
