
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