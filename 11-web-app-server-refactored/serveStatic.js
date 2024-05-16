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

function serveStaticFactory(publicResourcePath){
  return function serveStatic(req, res, next) {
    const resourceRequested = req.urlObj.pathname === "/" ? "index.html" : req.urlObj.pathname;
    if (isStatic(resourceRequested)) {
      const resourceFullPath = path.join(publicResourcePath, resourceRequested);
      if (!fs.existsSync(resourceFullPath)) {
        return next()
      }
      const stream = fs.createReadStream(resourceFullPath);
      stream.on("error", (err) => {
        console.log("error :", err);
        res.statusCode = 500;
        res.end("internal server error");
      });
      stream.on('end', () => next())
      stream.pipe(res);
    } else {
      next();
    }
  }
}

module.exports = serveStaticFactory;