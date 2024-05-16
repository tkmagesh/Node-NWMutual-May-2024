const http = require('node:http'),
    fs = require('node:fs'),
    path = require('node:path');

const server = http.createServer((req /* http.IncomingMessage */, res /* http.ServerResponse */) => {
    console.log(`${req.method} - ${req.url}`);
    const resourceRequested = req.url === '/' ? 'index.html' : req.url;
    const resourceFullPath = path.join(__dirname, resourceRequested)
    if (fs.existsSync(resourceFullPath)) {
      const stream = fs.createReadStream(resourceFullPath);
      /* 
      stream.on('data', chunk => {
        res.write(chunk);
      });
      stream.on('end', () => {
        res.end();
      }) 
      */
      stream.on('error', err => {
        console.log('error :', err);
        res.statusCode = 500;
        res.end('internal server error')
      });
      stream.pipe(res);
    } else {
      res.statusCode = 404;
      res.end("resource not found");
    }
});

server.listen(8080);

server.on('listening', () => {
    console.log('server listening on 8080...');
});