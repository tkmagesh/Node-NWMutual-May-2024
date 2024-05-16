var fs = require('node:fs'),
    calculator = require('./calculator');

try {
    var fileContents = fs.readFileSync('./calculator.dat', { encoding : 'utf8'});
    var lines = fileContents.split('\n');
    for (var idx = 0; idx < lines.length; idx++){
        var line = lines[idx];
        var data = parseLine(line)
        processData(data);
    }
    console.log('Done')
} catch (err){
    console.log('error :', err)
}

function processData(data){
    var result = 0;
    /* 
    switch (data.op) {
      case "add":
        result = calculator.add(data.x, data.y);
        break;
      case "subtract":
        result = calculator.subtract(data.x, data.y);
        break;
      case "multiply":
        result = calculator.multiply(data.x, data.y);
        break;
      case "divide":
        result = calculator.divide(data.x, data.y);
        break;

      default:
        break;
    } 
    */
    result = calculator[data.op](data.x, data.y)
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