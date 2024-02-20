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