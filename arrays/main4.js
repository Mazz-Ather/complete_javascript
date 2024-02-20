let array = ["mazz","saqib","junaid","ali"];
for (let i = 0 ;i < array.length; i++){
    console.log(array[i]);
}
// another method using for of
for (let arr of array){
    console.log(arr);
}
// find average 
let marks = [12,24,68,90,98,35,77,19];
let sum = 0;
for (let val of marks){
   sum = sum + val 
}console.log(sum);
let avg = sum / marks.length
console.log(avg);

// 10% off on all items
let items = [100,200,300,400,500];
console.log(items);
for (let i = 0 ; i <items.length; i++){
  let  offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items);

// concat
let heroes = ["imran khan","muhammad tahir","andrew tate"];
let friend = ["saqib","junaid"];
let myName = ["mazz"];
console.log(heroes.concat(friend,myName));

//method, add (push,unshift) &&delete( pop & shift,)
let deleted = friend.shift()
console.log("deleted item ",deleted);
console.log(heroes.concat(friend,myName));

let SLICE = heroes.slice(0,2)
// console.log(SLICE);

let h = [1,2,3,4,5,6,7];
h.splice(2,0,102)
console.log(h);

//?practice
let companies = ["google","microsoft","ibm","facebook","shopify"];
companies.shift()
console.log(companies);
companies.splice(1,1,"ola");
console.log(companies);
companies.push("amazon")
console.log(companies);
