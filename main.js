//!first practice question of object

const product = {
  Name: "Ball Pen",
  Company: "Dollar",
  Color: "Black",
  Rating: 4,
  Material: "Plastic",
};
console.log(product);

/**  second practice question of object */

const instaProfile = {
  userName: "maaz_ather_",
  followers: 16,
  following: 20,
  isFollow: true,
  type: "Private",
};
console.log(instaProfile);

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


//! fifth is a practice question of loops
//calculate 1 to 5
//      *             for loop

let sum = 0;
for (let i = 1; i < 5; i++) {
  sum = sum + 1;
}
console.log("sum is ", sum);

//           *         while loop

let j = 5;
while (j <= 5) {
  console.log("maaz-ather");
  j++;
};

//                 *    do while loop

let m = 10;
do {
  console.log("MAAZ_ATHER");
  m++;
} while (m <= 20);

//         *  for of loop (to print character of string)
let str = "maaz ather";
let size = 0;
for (let val of str) {
  console.log(val);
  size++;
}
console.log(size);

//          * for in loop for objects ( to print key value pairs)

const facebookProfile = {
  userName: "Maaz Ather",
  followers: 99,
  following: 99,
  isFriend: true,
  type: "Private",
};
for (let key in facebookProfile) {
  console.log("key =", key, facebookProfile[key]);
}
  

//! Mini assignment of loops
//? assignment number 1
//print all even numbers from 0 to 100
 let number ;
 for (let number = 0; number <=100 ; number++){
 if (number % 2 === 0){
  console.log(number);
 }else{
  console.log()
 }
};

// generate username 
const fullName = prompt("enter full name");
let username = `@${fullName}${fullName.length}`
console.log(username);