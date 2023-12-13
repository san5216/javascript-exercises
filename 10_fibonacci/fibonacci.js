const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS"
  }
  // Sum of the two preceding numbers
  let fib1 = 1;
  let fib2 = 0;

  for (let i = 2; i <= n; i++) {
    let nextFib = fib1 + fib2;
    fib2 = fib1;
    fib1 = nextFib;
  }
  return fib1;
};

// Do not edit below this line
module.exports = fibonacci;
