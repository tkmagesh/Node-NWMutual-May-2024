
function notFoundHandler(req, res){
    res.statusCode = 404;
    res.end();
}

module.exports = notFoundHandler;