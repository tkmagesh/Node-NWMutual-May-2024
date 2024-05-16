var fs = require('node:fs'),
    calculator = require('./calculator');


fs.readFile('./calculator.dat', { encoding : 'utf8'}, function(err, fileContents){
    if (err){
        console.log('error :', err)
        return
    }
    var lines = fileContents.split('\n');
    for (var idx = 0; idx < lines.length; idx++){
        var line = lines[idx];
        var data = parseLine(line)
        processData(data);
    }
    console.log('Done')
});

function processData(data){
    var result = calculator[data.op](data.x, data.y)
    console.log(result);   
}

function parseLine(line){
    var cols = line.split(','),
        op = cols[0],
        x = parseInt(cols[1]),
        y = parseInt(cols[2]);
    return { 
        op : op,
        x : x,
        y : y
    };
}