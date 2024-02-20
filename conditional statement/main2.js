//**third practice question of if else statement */

let num = prompt("Enter a Number");

if (num % 5 === 0) {
  console.log(num, "is a multiple of 5");
} else {
  console.log("try again");
}

//?fourth practice question of if else-if else statement
// written a code which can give grades to students according to their scores

let score = prompt("Enter Your Number 0-100");
let grade;

if (score >= 90 && score <= 100) {
  grade = "A+";
} else if (score >= 80 && score <= 89) {
  grade = "A";
} else if (score >= 70 && score <= 79) {
  grade = "B";
} else if (score >= 60 && score <= 69) {
  grade = "C";
} else if (score >= 50 && score <= 59) {
  grade = "D";
} else {
  grade = "F";
}

console.log("According to your number your grade was", grade);


