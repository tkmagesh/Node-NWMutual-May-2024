const chalk = require('chalk');

function loggerMiddleware(req, res, next){
    let logMessage = `${chalk.yellow(req.method)}\t${chalk.red(req.urlObj.pathname)}`;
    const startTime = new Date();
    res.on("finish", () => {
      const endTime = new Date(),
        elapsedTime = endTime - startTime;
      console.log(`${logMessage}\t${chalk.cyan(res.statusCode)}\t${elapsedTime}ms`);
    });
    next();
}

module.exports = loggerMiddleware;