//! syncronous --> execute line by line 
//! Asyncronous --> do not block the flow of code(it allows to print next instruction immediately)

//! setTimeout is a function that waits for some time and then executes the given function
function hello(){
    console.log(hello);
}

setTimeout(hello , 2000)

//! callback hell hard to read and manage nested functions

//! promise  - an object representing the eventual completion or failure of an asynchronous operation and the value it produces,
let promise = new  Promise((resolve,reject)=>{
    console.log("i am a promise");
  resolve("success") 
})
console.log(promise);

//! async await  makes our code more readable when we have promises or async operations
//! async function always  return a promise
async function message(){
    console.log("hy");
}
console.log(message());


//? async await  example
async function api(){
    return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        console.log('wether data');
         resolve(200);   
    } ,2000);
    })
}

async function getData(){
    await api()
}




