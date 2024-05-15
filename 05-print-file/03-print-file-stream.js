var fs = require('node:fs')

var stream = fs.createReadStream('./test.txt', { encoding : 'utf8', highWaterMark : 2 * 1024})
// stream events - data, end, error, open, close etc

var chunkCount = 0;

stream.on('open', function(){
    console.log('[open] stream opened for reading');
});

stream.on('data', function(chunk){
    ++chunkCount;
    console.log(chunk);
});

stream.on('end', function(){
    console.log('[end] end of stream');
});

stream.on('close', function(){
    console.log("[close] stream closed");
    console.log('chunkCount :', chunkCount);
})

stream.on('error', function(err){
    console.log('[error] error:', err)
});

