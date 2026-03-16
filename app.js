let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userpara = document.querySelector("#user-score");
const comppara = document.querySelector("#comp-score");


const playgame = (userChoice) => {
    console.log("userChoice =", userChoice);
    const compChoice = gencompChoice();
    console.log("compChoice =", compChoice);
    if(userChoice === compChoice){
        draw();
    }
    else{
        let userwinner = true;
        if(userChoice==="rock"){
            // scirror , // paper
           userwinner= compChoice==="paper"? false : true;
        }
        else if(userChoice==="scissors"){
            // paper , rock
            userwinner = compChoice==="rock"? false : true;
        }
        else{
            // rock ,scissors
            userwinner = compChoice ==="scissors"? false : true;
        }
        showwinner(userwinner);
    }
    
}


const showwinner=(userwinner)=>{
    if(userwinner){
        userscore++;
        userpara.innerText = userscore;
        msg.innerText = "You Win!"
        msg.style.backgroundColor = "green"
    }
    else{
        compscore++;
        comppara.innerText = compscore;
        console.log("computer win");
         msg.innerText = "You Lose"
          msg.style.backgroundColor = "red"
    }
}


const draw=()=>{
    console.log("match draw");
     msg.innerText = "Match draw ! Play Again";
      msg.style.backgroundColor = "black"
}



const gencompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
}




choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});