import doSomething from "./doSomething.js";
import { halfOf, multiply } from "./lib.js";
import { touch, flag } from "./validator.js";

let halfValue = halfOf(1024);
let multiplyValue = multiply(1024, 2048);
let doSome = doSomething();

console.log(halfValue, multiplyValue);

console.log("flag: ", flag);
touch();
console.log("flag: ", flag);

