// const { createServer } = require('node:http');
// const fs = require("fs");

// const http = require('node:http');
// import http from "http";

// const hostname = '127.0.0.1';
// const port = 3000;

// const server =  http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello world</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//EcmaScript code---
// import {a , b} from "./mymodule.js"
// console.log(a,b);

// import harry from "./mymodule.js"
// console.log(harry);


// CommonJs code---
const CJ = require("./mymodule2")
console.log(CJ);
