const convertToCelsius = function (degree) {
  // C = (x - 32) * (5 / 9)
  return +((degree - 32) * (5 / 9)).toFixed(1);
};

const convertToFahrenheit = function (degree) {
  // F = x * (9 / 5) + 32
  return +(degree * (9 / 5) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
