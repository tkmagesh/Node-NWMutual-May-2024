
var greetUtils = require('./hello-world');
var calculator = require("./calculator");

console.log(greetUtils.sayHelloWorld())
console.log(greetUtils.greet('Magesh'))

var x = 100,
  y = 200;

console.log(calculator.add(x, y));
console.log(calculator.subtract(x, y));
console.log(calculator.multiply(x, y));
console.log(calculator.divide(x, y));
