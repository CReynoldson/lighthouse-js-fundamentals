function ageCalculator (name, yearOfBirth, currentYear){
  var age = name + " is " + (currentYear - yearOfBirth) + " years old."
  return age;
}

console.log (ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));