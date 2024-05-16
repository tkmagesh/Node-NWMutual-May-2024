const http = require('node:http');
const calculator = require('./calculator');

const server = http.createServer((req, res) => {
    const urlObj = new URL(req.url, 'http://localhost/')
    if (urlObj.pathname !== '/calculator'){
        res.statusCode = 404;
        res.end('resource not found')
        return
    }
    const op = urlObj.searchParams.get('op'),
        x = parseInt(urlObj.searchParams.get('x')),
        y = parseInt(urlObj.searchParams.get('y')),
        result = calculator[op](x,y);
    res.write(result.toString());
    res.end();
})

server.listen(9090);

server.on('listening', () => console.log('app server listening on 9090...'))