
function notFoundHandler(req, res, next){
    console.log("[notFoundHandler] serving...");
    res.statusCode = 404;
    res.end();
    next();
}

module.exports = notFoundHandler;