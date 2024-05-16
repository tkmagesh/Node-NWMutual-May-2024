# Introduction to Node.js

## Magesh Kuppan
- tkmagesh77@gmail.com

## Schedule
- Session 01    : 1:30 hrs
- Tea Break     : 20 mins
- Session 02    : 1:30 hrs
- Lunch Break   : 1 hr
- Session 03    : 1:30 hrs
- Tea Break     : 20 mins
- Session 04    : 1:30 hrs

## Methodology
- No powerpoint
- Code & Discussion
- No dedicated time for Q&A

## Repository
- https://github.com/tkmagesh/node-nwmutual-may-2024

## Pre-requisite 
- Proficiency in JavaScript

## Reference
- https://bit.ly/node-training-videos

## Node.js
- What?
    - Runtime Environment where JS code can be executed
- Why?
    - Less resources (https://highscalability.com/linkedin-moved-from-rails-to-node-27-servers-cut-and-up-to-2/)
- How?
    - Single Threaded Event Loop

## Using Node.js

### REPL mode

## Assignment-1
Write a node program (calculator.js)
    - with a calculator object created with 'add', 'subtract', multiply, divide methods
    - invoke the calculator object methods with arguments 100 & 200 and print the results

## Assignment-2
- Create a file 'accumulator.js' exporting an 'accumulator' object with the following methods
    - add(n)
    - subtract(n)
    - multiply(n)
    - divide(n)
    - getResult()

- Create a file 'accumulator-client.js' that imports the accumulator from 'accumulator.js' and uses it
```
acc.add(100)
acc.subtract(50)
acc.multiply(5)
acc.divide(2)
console.log(acc.getResult()) //=> 125
```

## Assignment-3
- read the file 'calculator.dat' and invoke the corresponding 'calculator' methods and print the result
- IMPORTANT : Write 3 versions of the solution (fs.readFileSync, fs.readFile, fs.createReadStream)

## Assignment-4
```
Create a server (app server) which will respond to the following req
    http://localhost:9090/calculator?op=add&x=100&y=200
        => 300
    http://localhost:9090/calculator?op=subtract&x=100&y=200
        => -100

when a request is received
    if the resourceRequest is '/calculator'
        var urlObj = new URL(req.url)
        var qs = urlObj.searchParams
        op = qs.get('op')
        use the calcualtor to calculate
        return the result
    else
        send '404'

```

## Assignment-5
combine the functionality of 'web server' & 'app server' in one single server