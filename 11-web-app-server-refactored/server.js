const http = require("node:http"),
  path = require('node:path'),
    serveCalculator = require("./serveCalculator");
const serveStaticFactory = require("./serveStatic");
const notFoundHandler = require("./notFoundHandler");
const app = require('./app');
const logger = require('./logger');
const dataParser = require('./dataParser')

app.use(dataParser)
app.use(logger);
app.use(serveStaticFactory(path.join(__dirname, 'public')));
app.use(serveCalculator);
app.use(notFoundHandler);

const server = http.createServer(app);

server.listen(8080);

server.on("listening", () => {
  console.log("server listening on 8080...");
});
    

