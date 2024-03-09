//? click event
let btn = document.querySelector("#btn");

btn.onclick = ()=>{
    alert("clicked")
}
//?for print details

btn.onclick = (evt)=>{
console.log(evt);
console.log(evt.type);
console.log(evt.target);
console.log(evt.clientX);
}









