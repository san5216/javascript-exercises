const sumAll = function (start, stop) {
  let total = 0;
  if (start <= 0 || stop <= 0 || !Number.isInteger(start) || !Number.isInteger(stop)) {
    return 'ERROR';
  } else {
    for (let i = Math.min(start, stop); i <= Math.max(start, stop); i++) {
      total += i;
    }
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
