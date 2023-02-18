const whichSchool  = function (age) {
  if (age < 13){ //check if age is under 13
    console.log("Elementary School");// output Elementary
  }
  else if(age > 12 && age < 19) { // check if between 13 and 18 incl.
    console.log("Secondary School"); // output Secondary
  }
  else if (age > 18) { //check if over 18
    console.log("Lighthouse Labs"); //output lhl
  }
}
console.log(whichSchool(5));