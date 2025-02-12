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

function getHumanChoice(){
    while (true){
        humanChoice = prompt('scissors, rock or paper');
        humanChoice = humanChoice.toLowerCase() // let less error go through
        if (humanChoice == "scissors" || humanChoice == 'rock' || humanChoice == "paper"){
            return humanChoice;
        }
        else{
            alert('Please enter a correct choice between scissors, rock and paper');
        }
    }
}

function roundOfTheGame(){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    if (computerChoice === humanChoice){
        alert('Tie');
        return;
    }
    else{
        switch (computerChoice){
            case 'rock':
                if (humanChoice == 'paper'){
                    alert('You win a point');
                    return 1;
                } 
                else{
                    alert('You lost');
                    return 0;
                }
            case 'paper':     
                if (humanChoice == 'scissors'){
                    alert('You win a point');
                    return 1;
                } 
                else{
                    alert('You lost');
                    return 0;
                }
            case 'scissors':
                if (humanChoice == 'rock'){
                    alert('You win a point');
                    return 1;
                } 
                else{
                    alert('You lost');
                    return 0;
                }
            }
        }
    }


function gameLoop(){

    for (let i=0; i<5; i++){
        score = roundOfTheGame()
        if (score == 1){
            humanScore ++;
        }
        else if (score==0){
            computerScore ++
        }
    }
    if (humanScore > computerScore){
        alert("You won")
    }
    else if (computerScore > humanScore){
        alert('You lost')
    }
    else{
        alert('There is a tie')
    }
}


let humanScore = 0
let computerScore = 0

gameLoop()