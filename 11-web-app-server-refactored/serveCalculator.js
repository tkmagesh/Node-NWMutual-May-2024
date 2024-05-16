const calculator = require("./calculator"),
  querystring = require("node:querystring");

function serveCalculator(req, res, next){
    const urlObj = new URL(req.url, "http://localhost");
    if (urlObj.pathname === "/calculator" && req.method === "GET") {
      const op = urlObj.searchParams.get("op"),
        x = parseInt(urlObj.searchParams.get("x")),
        y = parseInt(urlObj.searchParams.get("y")),
        result = calculator[op](x, y);
      res.write(result.toString());
      res.end();
      next()
    } else if (urlObj.pathname === "/calculator" && req.method === "POST") {
      let reqBody = "";
      req.on("data", (chunk) => (reqBody += chunk));
      req.on("end", () => {
        const data = querystring.parse(reqBody),
          x = parseInt(data.x),
          y = parseInt(data.y),
          op = data.op,
          result = calculator[op](x, y);
        res.write(result.toString());
        res.end();
        next()
      });
    } else {
      next()
    }
}

module.exports = serveCalculator;