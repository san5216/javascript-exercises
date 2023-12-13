const reverseString = function (string) {
  const splitString = string.split('');
  splitString.reverse();
  let reversed = '';
  for (c of splitString) {
    reversed += c;
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
