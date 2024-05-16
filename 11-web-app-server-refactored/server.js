const http = require("node:http"),
    serveCalculator = require("./serveCalculator");
const serveStatic = require("./serveStatic");
const notFoundHandler = require("./notFoundHandler");
  
const server = http.createServer((req , res ) => {
    const urlObj = new URL(req.url, 'http://localhost');
    console.log(`${req.method} - ${urlObj.pathname}`);
    serveStatic(req, res);
    serveCalculator(req, res);
    notFoundHandler(req, res);
});

server.listen(8080);

server.on("listening", () => {
  console.log("server listening on 8080...");
});
    

