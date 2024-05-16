const http = require("node:http"),
  fs = require("node:fs"),
  path = require("node:path")
  calculator = require("./calculator"),
  querystring = require("node:querystring");


const staticResExtns = ['.html', '.css', '.js', '.jpg', '.png', '.xml', '.txt', '.json']

function isStatic(resource){
    const resExtn = path.extname(resource);
    return staticResExtns.indexOf(resExtn) !== -1
}

const server = http.createServer((req , res ) => {
    const urlObj = new URL(req.url, 'http://localhost');
    console.log(`${req.method} - ${urlObj.pathname}`);
    const resourceRequested = urlObj.pathname === "/" ? "index.html" : urlObj.pathname;
    if (isStatic(resourceRequested)){
        const resourceFullPath = path.join(__dirname, resourceRequested);
        if (fs.existsSync(resourceFullPath)) {
            const stream = fs.createReadStream(resourceFullPath);
            stream.on("error", (err) => {
                console.log("error :", err);
                res.statusCode = 500;
                res.end("internal server error");
            });
            stream.pipe(res);
        } else {
            res.statusCode = 404;
            res.end("resource not found");
        }
    } else if (urlObj.pathname === '/calculator' && req.method === 'GET'){
        const op = urlObj.searchParams.get('op'),
            x = parseInt(urlObj.searchParams.get('x')),
            y = parseInt(urlObj.searchParams.get('y')),
            result = calculator[op](x,y);
        res.write(result.toString());
        res.end();
    } else if (urlObj.pathname === '/calculator' && req.method === 'POST') {
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
        res.statusCode = 404;
        res.end()
    }

});

server.listen(8080);

server.on("listening", () => {
  console.log("server listening on 8080...");
});
    

