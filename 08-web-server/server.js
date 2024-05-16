const http = require('node:http'),
    fs = require('node:fs'),
    path = require('node:path');

const server = http.createServer((req /* http.IncomingMessage */, res /* http.ServerResponse */) => {
    console.log(`${req.method} - ${req.url}`);
    const resourceRequested = req.url;
    const resourceFullPath = path.join(__dirname, resourceRequested)
    if (fs.existsSync(resourceFullPath)) {
    //   res.write("resource found - will send the resource shortly!");
      // read the file and send to the client
      res.end();
    } else {
      res.statusCode = 404;
      res.end("resource not found");
    }
});

server.listen(8080);

server.on('listening', () => {
    console.log('server listening on 8080...');
});