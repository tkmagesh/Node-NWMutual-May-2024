/* 
var accumulatorFactory = require('./accumulator');
var accumulator = accumulatorFactory() 
*/

var accumulator = require('./accumulator')();

accumulator.add(100)
accumulator.subtract(50)
accumulator.multiply(5)
accumulator.divide(2)
console.log(accumulator.getResult())

// var acc2 = accumulatorFactory()
var acc2 = require('./accumulator')();
console.log(acc2.getResult())