function getComputerChoice(){
    let number = Math.floor(Math.random()*3); // return a random int number between 0 and 2
    if (number == 0){
        return "paper";
    }
    else if (number == 1){
        return "scissors";
    }
    else{
        return 'rock';
    }
}

const roundResult = document.querySelector("#roundResult");
const buttons = document.querySelector("ul");
let humanScore = 0;
let computerScore = 0;
const humanScoreContainer = document.querySelector("#humanScore");
const computerScoreContainer = document.querySelector("#computerScore");

buttons.addEventListener("click", (e)=>{
    const humanChoice = e.target.id;
    const computerChoice = getComputerChoice();
    if (computerChoice === humanChoice){
        roundResult.textContent = ('Tie');
    }
    else{
        switch (computerChoice){
            case 'rock':
                if (humanChoice == 'paper'){
                    roundResult.textContent = ('You win a point');
                    humanScore += 1;
                    humanScoreContainer.textContent = `Your score : ${humanScore}`;
                } 
                else{
                    roundResult.textContent = ('You lost');
                    computerScore += 1;
                    computerScoreContainer.textContent = `Computer score : ${computerScore}`;
                }
                break;
            case 'paper':     
                if (humanChoice == 'scissors'){
                    roundResult.textContent = ('You win a point');
                    humanScore += 1;
                    humanScoreContainer.textContent = `Your score : ${humanScore}`;
                } 
                else{
                    roundResult.textContent = ('You lost');
                    computerScore += 1;
                    computerScoreContainer.textContent = `Computer score : ${computerScore}`;
                    
                }
                break;
            case 'scissors':
                if (humanChoice == 'rock'){
                    roundResult.textContent = ('You win a point');
                    humanScore += 1;
                    humanScoreContainer.textContent = `Your score : ${humanScore}`;
                } 
                else{
                    roundResult.textContent = ('You lost');
                    computerScore += 1;
                    computerScoreContainer.textContent = `Computer score : ${computerScore}`;
                }
                break;
            }
        }
        if (humanScore === 5){
            const toErase = document.querySelector("body").childNodes
            toErase.forEach( (node) => {
                node.remove()
            })
            document.querySelector('body').textContent = "You win"
        }
        else if (computerScore === 5){
            const toErase = document.querySelector("body").childNodes
            toErase.forEach( (node) => {
                node.remove()
            })
            document.querySelector('body').textContent = "You lost"


        }
})



gameLoop()