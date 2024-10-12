let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#re");

let newa=document.querySelector("#newa");
let msg=document.querySelector("#msg");
let main=document.querySelector(".main");


let turnO = true; //playerX, playerO
let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const reset=()=>{
     turnO=true;
     en();
     main.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled=true;
   checkWinner();
    
  });
});
const dis= () =>{
  for(box of boxes){
    box.disabled=true;
  }
};
const en= () =>{
  for(box of boxes){
    box.disabled=false;
    box.innerText="";
  }
};
const show=(p1)=>{
  msg.innerText=`Congratulations, winner is ${p1}`;
  main.classList.remove("hide");
  dis();


};
const checkWinner =() =>{
      for(let pattern of winPatterns){
       
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
        if(p1!="" && p2!="" && p3!=""){
          if(p1==p2 && p2==p3){
            console.log("winner",p1);
            show(p1);
          }
        }
      }
};
resetBtn.addEventListener("click",reset);
newa.addEventListener("click",reset);