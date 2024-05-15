
console.log('accumulator.js evaluated');

module.exports = function(){ //accumulator factory
    var result = 0;
    
    var accumulator = {
        add(n) {
            result += n;
        },
        subtract(n) {
            result -= n;
        },
        multiply(n) {
            result *= n;
        },
        divide(n) {
            result /= n;
        },
        getResult(){
            return result;
        }
    };
    return accumulator;
}

// module.exports = accumulator;