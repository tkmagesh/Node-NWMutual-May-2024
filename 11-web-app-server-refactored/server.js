const http = require("node:http"),
    serveCalculator = require("./serveCalculator");
const serveStatic = require("./serveStatic");
const notFoundHandler = require("./notFoundHandler");

const middlewares = [ serveStatic, serveCalculator, notFoundHandler ]

function exec(req, res, middlewares){
  const first = middlewares[0],
    next = function(){
      exec(req, res, middlewares.slice(1))
    };
    if (typeof first === 'function'){
      first(req, res, next)
    }
}

const server = http.createServer((req , res ) => {
    const urlObj = new URL(req.url, 'http://localhost');
    console.log(`${req.method} - ${urlObj.pathname}`);
    exec(req, res, middlewares)
});

server.listen(8080);

server.on("listening", () => {
  console.log("server listening on 8080...");
});
    

