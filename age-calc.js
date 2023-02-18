function ageCalculator (name , dob, year){
  let age = year - dob;
  let string = (name + " is " + age + " years old.")
  return string
}
console.log(ageCalculator("Suzie", 1991, 2023))
