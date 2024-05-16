const querystring = require('node:querystring');

function dataParser(req, res, next){
    const urlObj = new URL(req.url, "http://localhost");
    req['urlObj'] = urlObj;
    if (req.method === 'GET'){
        const query = {};
        urlObj.searchParams.forEach((value, key) => {
            query[key] = value;
        });
        req['query'] = query;
        return next()

    } else if (req.method === 'POST'){
        let reqBody = "";
        req.on("data", (chunk) => (reqBody += chunk));
        req.on("end", () => {
            const body = querystring.parse(reqBody)
            req['body'] = body;
            return next();
        })
    } else {
        next()
    }
}

module.exports = dataParser;