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

function serveStatic(req, res) {
  const urlObj = new URL(req.url, "http://localhost"); // remove duplication
  const resourceRequested = urlObj.pathname === "/" ? "index.html" : urlObj.pathname;
  if (isStatic(resourceRequested)) {
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
  }
}

module.exports = serveStatic;