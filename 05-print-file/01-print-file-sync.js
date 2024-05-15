var fs = require('node:fs')

var fileContents = fs.readFileSync('./test.txt', { encoding : 'utf8'})

console.log(fileContents);