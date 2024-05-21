let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".option");
const msg=document.querySelector("#msg");
const userScorePara= document.querySelector("#me")
const comScorePara= document.querySelector("#comp")

//computerGenarate
const genComChoice=()=>{
    const options=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
   return options[ranIdx];

}

const showWin=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText="You win!"
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        comScorePara.innerText=compScore;

        msg.innerText="You Lost";
        msg.style.backgroundColor="red";
        console.log("you lost!");
        
    }
}


//draw
const drawGame=()=>{
    msg.innerText="Game draw!try again"
msg.style.backgroundColor="blue";
msg
}
//comparioson
const playGame=(optionId)=>{
    
const comChoice=genComChoice();
console.log("computerChoice",comChoice);
if(optionId===comChoice){
    drawGame();
}
else{
    let userWin=true;
    if(optionId==="rock"){
        userWin = comChoice==="paper"? false:true;
    }
    else if(optionId==="paper"){
        userWin= comChoice==="scissors"? false:true;
    }
    else{
        userWin=comChoice==="rock"? false:true;
    }
    showWin(userWin);
}
}
//userChoice
choices.forEach((option)=>{
option.addEventListener("click",()=>{
const optionId=option.getAttribute("id");
playGame(optionId);
});
});