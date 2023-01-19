const hello = require("./hello");
hello.sayHello();

// const http = require('http');
// http.createServer((req, res) => {
//     res.writeHead(200, {
//       "Content-Type": "text/plain",
//     });
//     res.end("Hello World");
//   })
//     .listen(3000);

// console.log("Server running at localhost:3000");

function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}
function hellowWorld(req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
}

function goodbyeWorld(req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Goodbye World");
}

const connect = require("connect");
const app = connect();
// Use middleware
app.use("/hello", hellowWorld);
app.use("/bye", goodbyeWorld);
app.listen(3000);

console.log("Server running at localhost:3000");
