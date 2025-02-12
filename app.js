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
            alert('Please enter a correct choice between scissors, rock and paper')
        }
    }
}
