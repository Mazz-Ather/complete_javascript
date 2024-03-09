console.dir(document.body);
 let get = document.querySelector("p")
 console.dir(get)
//? q 1
let h2 =  document.querySelector('h2');
 h2.innerText = h2.innerText + " from mazz";

 //? q 2
 let divs = document.querySelectorAll('.class');
 
 let idx = 1;
for (div of divs){
    div.innerText = `new value ${idx}`;
    idx++
}
//? get attribute
let para = document.querySelector("p");
console.log(para.getAttribute("class"));
//? set attriute
console.log(para.setAttribute("class","myPara"));

//? styling
let box = document.querySelector("#box");
 box.style.backgroundColor="red";
 box.style.fontSize= "48px";
 box.innerText= "mazz";


 //? crerate element
 let newbtn = document.createElement("button");
 newbtn.innerText= "click me";
 console.log(newbtn); 
newbtn.style.backgroundColor = "yellow";

let p = document.querySelector("p");
p.append(newbtn)

//? create element q 2
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>heyy i am mazz</i>";

let body = document.querySelector("body").prepend(newHeading)

//? delete element
let pa = document.querySelector(`p`).remove();

//? q2
newHeading.remove()

//? practice set question
let btn = document.createElement("button");
btn.innerText = "click me"
btn.style.color = "white";
btn.style.backgroundColor = "red";
let html = document.querySelector("body").prepend(btn)

//? practice set question num 2 (excess css)

let parag = document.querySelector("p");
//* set attribute make new class and old one will be ignore
parag.setAttribute("class" , "content2");

//* classlist will add two classes
parag.classList.add("content2")

//*we can also do classlist.remove

















