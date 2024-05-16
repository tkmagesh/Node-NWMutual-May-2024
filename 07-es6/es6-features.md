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

```
## rest operator (object)
```js

```
## spread operator (object)
```js

```
## default arguments
```js

```
## arrow functions
```js

```
## iterators (for..of)
```js

```
## class
```js

```