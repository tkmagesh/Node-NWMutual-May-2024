
// by default the calculator is 'private'
var calculator = {
  add(x, y) {
    return x + y;
  },
  subtract(x, y) {
    return x - y;
  },
  multiply(x, y) {
    return x * y;
  },
  divide(x, y) {
    return x / y;
  },
};

// assign the calculator to module.exports to make it public
module.exports = calculator;