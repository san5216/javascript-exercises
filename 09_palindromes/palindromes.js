const palindromes = function (phrase) {
  let fullString = phrase.replace(/[^A-Za-z0-9]/g, '')
  
  return fullString.toLowerCase() === fullString.split('').reverse().join('').toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
