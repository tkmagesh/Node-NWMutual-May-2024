const http = require('node:http');
const calculator = require('./calculator');
const querystring = require('node:querystring')

const server = http.createServer((req, res) => {
    const urlObj = new URL(req.url, 'http://localhost/')
    if (urlObj.pathname !== '/calculator'){
        res.statusCode = 404;
        res.end('resource not found')
        return
    }
    if (req.method === 'GET'){
        const op = urlObj.searchParams.get('op'),
            x = parseInt(urlObj.searchParams.get('x')),
            y = parseInt(urlObj.searchParams.get('y')),
            result = calculator[op](x,y);
        res.write(result.toString());
        res.end();
    } else if (req.method === 'POST') {
        let reqBody = '';
        req.on('data', chunk => reqBody += chunk);
        req.on('end', () => {
            const data = querystring.parse(reqBody),
                x = parseInt(data.x),
                y = parseInt(data.y),
                op = data.op,
                result = calculator[op](x,y);
            res.write(result.toString())
            res.end();
        })
    } else {
        res.statusCode = 405
        res.end('Unsupported method')
    }
})

server.listen(9090);

server.on('listening', () => console.log('app server listening on 9090...'))