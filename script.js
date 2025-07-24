let turnX=true;
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let msg = document.querySelector(".msg");
let newGame = document.querySelector("#new-game");

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
        document.querySelector(".msg-container").classList.add("hide");
    }
};

const winnerAnnounce =  (winner)=>{
    msg.innerText = `Congrats! Winner is Player${winner}`;
    document.querySelector(".msg-container").classList.remove("hide");
    disableBoxes();
};

const checkWinner = ()=>{
    let isWinner=false;
    for(patterns of winPattern){
        let posVal1 = boxes[patterns[0]].innerText;
        let posVal2 = boxes[patterns[1]].innerText;
        let posVal3 = boxes[patterns[2]].innerText;
        if(posVal1!="" && posVal2!="" && posVal3!=""){
            if(posVal1==posVal2 && posVal1==posVal3){
                console.log("winner" ,posVal1);
                isWinner=true;
                winnerAnnounce(posVal1);
            }
        }
    }

    let isAllFilled = true ; 
    for(let box of boxes){
        if(box.innerText==""){
            isAllFilled = false;
        }
    }

    if(!isWinner && isAllFilled){
        msg.innerText = "It's a Draw, Nobody Wins Try Again!";
        document.querySelector(".msg-container").classList.remove("hide");
        disableBoxes();
    }
};

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
    if(turnX){
        box.innerText =  "X";
        box.style.color = "#D87CAC"
        turnX = false;
    }else{
        box.innerText = "O";
        box.style.color = "#004F2D"
        turnX = true; 
    }
    box.disabled=true;
    checkWinner();
})})

newGame.addEventListener("click",enableBoxes);
reset.addEventListener("click",enableBoxes);
