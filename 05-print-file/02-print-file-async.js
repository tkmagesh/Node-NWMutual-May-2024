var fs = require('node:fs')

fs.readFile('./test.txt', { encoding : 'utf8'}, function(err, fileContents){
    if (err){
        console.log('error reading file :', err)
        return;
    }
    console.log(fileContents);
})
console.log('End of [print-file-async.js] file');

