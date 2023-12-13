const findTheOldest = function (people) {
  return people.reduce((oldest, currentPerson) => {
    const oldestAge = calcAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = calcAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

    if (oldestAge > currentAge) {
      return oldest;
    } else {
      return currentPerson;
    }
  })
};

function calcAge(birth, death) {
  if (!death){
    death = new Date().getFullYear();
  }
  return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
