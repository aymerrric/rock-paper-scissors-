function getComputerChoice(){
    number = Math.floor(Math.random()*3) // return a random int number between 0 and 2
    if (number == 0){
        return "paper"
    }
    else if (number == 1){
        return "scissors"
    }
    else{
        return 'rock'
    }
}

console.log(getComputerChoice())