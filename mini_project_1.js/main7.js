//? TIC TAC TOE GAME
//*access
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
//*whose turn
let turn0 = true;
//*winning pattern
let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
  ];
  
  // Loop through each box and add a click event listener
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
      if(turn0){
         box.innerText = "0"
         turn0 = false;
    }else{
        box.innerText = "X"
        turn0 = true;
    }
    box.disabled = true
    checkWinner() 
})
})

let checkWinner = ()=>{
    for (let pattern of winPatterns){
        let position1 =boxes[pattern[0]].innerText;
        let position2 =boxes[pattern[1]].innerText;
        let position3 =boxes[pattern[2]].innerText; 
            if (position1 != "" && position2 != "" , position3 != "")
if (position1 === position2 && position2 === position3){
    alert("winner")
}
    }

}




