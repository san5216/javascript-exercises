const removeFromArray = function (arr, ...values) {
  // Loop through values in values array
  for (let value of values) {
    const index = arr.indexOf(value);
    if (index !== -1) {
      const x = arr.splice(index, 1);
    }
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
