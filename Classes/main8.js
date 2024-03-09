// //? object 
// //* using this
// let pen ={
//     company : "dollar",
//     color : "blue",
//     material : "plastic",
//     matte: function() {
//         console.log(this.material);
//     }
// }
// pen.matte();

// //?prototype
// //* 
// const employee = {
//     calcTax(){
//         console.log("10% tax");
//     }
// }
// const mazz = {
//    salary : 10000,
// }

// mazz.__proto__ = employee;
// mazz.calcTax();
// console.log(mazz);

// //! CLASSES
// class lambhorghini{
//     start(){
//         console.log("car start");
//     }
// stop(){
//     console.log("car stopped");
// }
//  brand(brand){
//      this.brand = brand;
// }
// tyreCompany(tyre){
//     this.tyre = tyre;
// }

// power(engine){
//     this.engine = engine
// }
// }
// let aventandor = new lambhorghini();

// aventandor.brand("vivek")
// aventandor.tyreCompany("servis")
// aventandor.power("V8")
// console.log(aventandor);

// //* shorter way

// class bmw {
//     constructor(brand,engine,color,year,price) {
//         console.log("create a new car");
//         this.brand = brand;
//         this.engine = engine;
//         this.color = color;
//         this.year = year;
//         this.price= price; 
//     }
//   drift(){
//     console.log("tuu tuuu tutu ututut");
//   }   
// }

// let myCar = new bmw ("M5","v8","black","2023",1500000);
// myCar.drift();
// console.log(myCar);

//? inheritance 
// // example 1
// class person{
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
// }
// class coder extends person{
//     coding(){
//         console.log("coding");
//     }
// }
// let mazz = new coder();
// // console.log(mazz);

// //? create a class user with 2 properties and also has method

// let data = "secret info"
// class user{
//     constructor(name , email){
//       console.log(this);
//         this.name = name ;
//         this.email = email ;
//     }
//    viewData(){
//     console.log(data);
//    }
// }
// let mazz = new user("mazz", "mazzather@gmail.com" , "info") ;
// mazz.viewData();
// console.log(mazz);

//? practice question 2 is all about inheritance 


let data = "secret info"
class user{
    constructor(name , email){
      console.log(this);
        this.name = name ;
        this.email = email ;
    }
   viewData(){
    console.log(data);
   }
}
class admin extends  user {
  constructor(name,email){
     super(name,email)
  }
   editData(){
    data = "hacked"
   }

}
let junaid = new admin("junaid","junaid@yahoo.com");
console.log(junaid)

//~ in console  ---->  write juanid.editData() and then print data to hacked
