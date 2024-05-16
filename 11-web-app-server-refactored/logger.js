
function loggerMiddleware(req, res, next){
    console.log(`${req.method} - ${req.urlObj.pathname}`);
    next()
}

module.exports = loggerMiddleware;