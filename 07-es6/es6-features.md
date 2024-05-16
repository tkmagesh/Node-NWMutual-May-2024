# ES6

## let
```js
// var - is NOT block scoped
for (let i = 0; i < 10; i++){
}

let no = 100
```
## const
```js
const pi = 3.14

```
## destructuring (array)
```js
let nos = [3,1,2,4,5]
let [x, y] = nos
```
## rest operator (array)
```js
let nos = [3,1,2,4,5]
let [x, y, ...z] = nos
```
## spread operator (array)
```js
let nos = [3,1,2,4,5]
let newNos = [ ...nos, 10, 20, 30 ]
```

## rest & spread operator in function parameters
```js
function sum(...args /* rest operator */){
    let result = 0;
    for (let idx = 0; idx < args.length; idx++){
        result += args[idx];
    }
    return result;
}

sum(10)

sum(10,20)

sum(10,20,30,40,50)

let nos = [3,1,2,4,5]
sum(...nos /* spread operator */)
```
## destructuring (object)
```js
let product = { id : 100, name : 'Pen', cost : 10 }

// variable names match the attribute names
let {id, cost} = product

// variable names are different from the attribute names
let {id :x , cost:y} = product
```
## rest operator (object)
```js
let product = { id : 100, name : 'Pen', cost : 10 }

let { cost , ...z } = product
```
## spread operator (object)
```js
let product = { id : 100, name : 'Pen', cost : 10 }

let productWithDiscount = { ...product, discount : 5 }
console.log(productWithDiscount);
```
## default arguments
```js
function add(x = 100,y = 200){
    return x + y;
}


add()

add(10)

add(undefined, 20)

add(10, 20)
```
## arrow functions
```js
/*
// function statement
function add(x,y){
    return x + y;
}

// function expression
let add = function(x,y){
    return x + y;
}

// arrow function
let add = (x,y) => {
    return x + y;
}
*/
let add = (x,y) => x + y;

// arrow functions applied
let nos = [3,1,2,4,5]
let evenNos = nos.filter(function(no){
    return no % 2 === 0;
})

let oddNos = nos.filter(no => no % 2 !== 0)

/* 
Array Methods
=============
    forEach
    filter
    map
    reduce
*/
```
## iterators (for..of)
```js
let nos = [3,1,2,4,5]

for (let no of nos){
    console.log(no)
}
```

## template string
```js
let x = 100, y = 200

// without template strings
let s1 = 'sum of ' + x + ' and ' + y + ' is ' + (x+y)

// using template string
let s2 = `sum of ${x} and ${y} is ${x+y}`
```
## class
```js
class Product {
    
    // class members
    id = 0;
    name = '';
    cost = 0;

    // constructor
    constructor(id, name, cost){
        this.id = id;
        this.name = name;
        this.cost = cost;
    }

    format(){
        return `id = ${this.id}, name = ${this.name}, cost = ${this.cost}`
    }
}
var pen = new Product(100, 'Pen', 10)
console.log(pen.format())

// class inheritance
class PerishableProduct extends Product {
    // class member
    expiry = '';

    // constructor
    constructor(id, name, cost, expiry){
        super(id, name, cost);
        this.expiry = expiry;
    }

    // method overriding
    format(){
        return `${super.format()}, expiry = ${this.expiry}`;
    }
}
let milk = new PerishableProduct(200, 'Milk', 10, '15 Days')
console.log(milk.format())
```