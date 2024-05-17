
export function add(x,y){
  return x + y
}

export function subtract(x,y){
  return x - y
}

export function multiply(x, y) {
  return x * y;
}

export function divide(x, y) {
  return x / y;
}

// There can be only one default export in a file
const utils = { multiply, divide }
export default utils;

/* 
export default function sayHi(){
  return "Hi there!"
} 
*/
