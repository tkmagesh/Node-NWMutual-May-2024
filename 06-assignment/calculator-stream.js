var fs = require("node:fs"),
  calculator = require("./calculator");


const stream = fs.createReadStream('./calculator.dat', { encoding : 'utf8'});
let fileChunk = '';
stream.on('data', chunk => {

    // append the chunk of data read from the file 
    fileChunk += chunk;

    // take only the complete data (ending with '\n')
    const dataChunk = fileChunk.substring(0, fileChunk.lastIndexOf('\n'))

    // retain the remaining data to be appended with the next chunk for processing
    fileChunk = fileChunk.substring(fileChunk.lastIndexOf('/n'))

    // process the current chunk
    var lines = dataChunk.split("\n");
    for (var idx = 0; idx < lines.length; idx++) {
      var line = lines[idx];
      var data = parseLine(line);
      processData(data);
    }
})
stream.on('end', function(){
    console.log('Done')
} );

function processData(data) {
  var result = calculator[data.op](data.x, data.y);
  console.log(result);
}

function parseLine(line) {
  var cols = line.split(","),
    op = cols[0],
    x = parseInt(cols[1]),
    y = parseInt(cols[2]);
  return {
    op: op,
    x: x,
    y: y,
  };
}
