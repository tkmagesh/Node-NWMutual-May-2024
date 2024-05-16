const calculator = require("./calculator")

function serveCalculator(req, res, next){
    const urlObj = new URL(req.url, "http://localhost");
    if (urlObj.pathname === "/calculator" && req.method === "GET") {
      const op = req.query.op,
        x = parseInt(req.query.x),
        y = parseInt(req.query.y),
        result = calculator[op](x, y);
      res.write(result.toString());
      res.end();
      next()
    } else if (urlObj.pathname === "/calculator" && req.method === "POST") {
      const x = parseInt(req.body.x),
          y = parseInt(req.body.y),
          op = req.body.op,
          result = calculator[op](x, y);
        res.write(result.toString());
        res.end();
    } else {
      next()
    }
}

module.exports = serveCalculator;