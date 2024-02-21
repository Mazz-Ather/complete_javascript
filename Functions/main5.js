function myfunction() {
  console.log("mazz ather");
}
myfunction();
////
function fullName(name, num) {
  //parameter
  console.log(name, num);
}
fullName("mazz ather", 88); //argument

//sum of two numbers
function sum(a, b) {
  console.log(a + b);
}
sum(1, 2);
sum(90, 65);
sum(800, 4);
//return
function r(x, y) {
  s = x + y;
  return s;
}
let val = r(3, 4);
console.log(val);
//arrowFunction
let arrowFunction = (x, y) => {
  console.log(x + y);
};
arrowFunction("8", "4");
arrowFunction(1, 2);

const multiply = (a, b) => {
  console.log(a * b);
};
multiply(2, 5);
// print vowels
function countvowels(str) {
  let count = 0;
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}
countvowels("mazz ather");

//same but in arror function

let countVowelsArrow = (str) => {
  count = 0;
  for (const iterator of str) {
    if (
      iterator === "a" ||
      iterator === "e" ||
      iterator === "i" ||
      iterator === "o" ||
      iterator === "u"
    ) {
      count++;
    }
  }
  console.log(count);
};
countVowelsArrow("mazz ather");

//for each
let array = ["a", "b", "c", "d"];

array.forEach((val) => {
  console.log(val);
});
//3 parameters
array.forEach((val, idx, array) => {
  console.log(val, idx, array);
});

let square = [2, 4, 5, 6, 7, 8, 9];
square.forEach((val) => {
  console.log(val ** 2);
});

//map
square.map((val) => {
  console.log(val * val);
});
console.log(square);

//filter
let num = [2, 3, 4, 5, 6];
let even = num.filter((val) => {
  return val % 2 == 0;
});
console.log(even);

// reduce ////it returns single value
let red = [1, 2, 3, 4];
let output = red.reduce((prev, curr) => {
  return prev + curr; // to print bigget p>c?p:c
});
console.log(output);
//practice
let marks = [2, 3, 56, 78, 99, 87, 90, 95, 32, 12, 67];
let toppers = marks.filter((marks) => {
  return marks >= 90;
});
console.log(toppers);

// practice
 let n = prompt("enter a number");
const k = [];
for (i = 1; i <= k; i++) {
  k[i-1] = i
}
console.log(k);
