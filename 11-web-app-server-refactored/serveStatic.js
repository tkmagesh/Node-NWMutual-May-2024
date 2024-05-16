const fs = require("node:fs"),
  path = require("node:path");

const staticResExtns = [
  ".html",
  ".css",
  ".js",
  ".jpg",
  ".png",
  ".xml",
  ".txt",
  ".json",
];

function isStatic(resource) {
  const resExtn = path.extname(resource);
  return staticResExtns.indexOf(resExtn) !== -1;
}

function serveStatic(req, res, next) {
  const urlObj = new URL(req.url, "http://localhost"); // remove duplication
  const resourceRequested = urlObj.pathname === "/" ? "index.html" : urlObj.pathname;
  if (isStatic(resourceRequested)) {
    const resourceFullPath = path.join(__dirname, resourceRequested);
    if (!fs.existsSync(resourceFullPath)) {
      return next()
    }
    const stream = fs.createReadStream(resourceFullPath);
    stream.on("error", (err) => {
      console.log("error :", err);
      res.statusCode = 500;
      res.end("internal server error");
    });
    // stream.pipe(res); 
    stream.on('open', () => {
      console.log("[serveStatic] - opening the stream");
    })
    stream.on('data', chunk => {
      console.log('[serveStatic] - serving chunk')
      res.write(chunk);
    });
    stream.on('end', () => {
      console.log("[serveStatic] - ending response");
      res.end();
      next()
    });
  } else {
    next();
  }
}

module.exports = serveStatic;