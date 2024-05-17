
// import the complete module object
/* 
import * as calc from './calculator.js'

var x = 100,
  y = 200;

console.log(calc.add(x, y));
console.log(calc.subtract(x, y));
console.log(calc.multiply(x, y));
console.log(calc.divide(x, y)); 
*/

// partial import
import { add , subtract  } from "./calculator.js";
console.log(add(100, 200));
console.log(subtract(100, 200));

// import with alias
import { add as addFn, subtract as subtractFn } from './calculator.js'
console.log(addFn(100, 200));
console.log(subtractFn(100, 200));

// importing the default exported
import calc_utils from './calculator.js'
console.log(calc_utils.multiply(100,200))
console.log(calc_utils.divide(100, 200));

/* 
import hi from './calculator.js'
console.log(hi()) 
*/