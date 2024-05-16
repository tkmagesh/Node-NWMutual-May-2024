
const middlewares = [];


function exec(req, res, middlewares) {
  const first = middlewares[0],
    next = function () {
      exec(req, res, middlewares.slice(1));
    };
  if (typeof first === "function") {
    first(req, res, next);
  }
}

function app(req, res){
    exec(req, res, middlewares);
}

app['use'] = function(middleware){
    middlewares.push(middleware)
};

module.exports = app;