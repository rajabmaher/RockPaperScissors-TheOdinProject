
// playing Rock Paper Scissors in the console / The Odin Project

// a function begin with a function called getComputerChoice that will randomly 
// return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the 
// game to make the computer’s play.
function getComputerChoice(){
    let ComputerChoice = Number.parseFloat((Math.random() * 10)).toFixed();
    if (ComputerChoice <= 3.33){
        return 'rock';
    } else if (ComputerChoice <= 6.66){
        return 'paper'
    } else {
        return 'scissors'
    }
}

// function that plays a single round of Rock Paper Scissors. 
// The function should take two parameters - the playerSelection 
// and computerSelection - and then return a string that declares 
// the winner or tie of the round.
function playRound(playerSelection, computerSelection) {
    // Make your function’s playerSelection parameter case-insensitive 
    // (so users can input rock, ROCK, RocK or any other variation). by making the playerSelection.toLowerCase()
    
    if ((playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') 
        || (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') 
        || (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors')){
            return `You Won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`
    } else if (playerSelection.toLowerCase() == computerSelection){
        return "Draw!"
    } else {
        return `You Lose And Computer Won! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`
    }
}

// computerSelection = getComputerChoice();
// playGame(). Use the previous function inside of this one to play a five round 
// game that keeps score and reports a winner or loser at the end.
function playGame(){
    let playerResult = 0;
    let computerResult = 0;
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt('What is your choice{rock / paper / scissors}');
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
        if (playRound(playerSelection, computerSelection) == `You Won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`){
            playerResult += 1;
            console.log(playRound(playerSelection, computerSelection))
            console.log(`playerResult ${playerResult} || computerResult ${computerResult}`)
        } else if (playRound(playerSelection, computerSelection) == `You Lose And Computer Won! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`){
            computerResult += 1;
            console.log(playRound(playerSelection, computerSelection))
            console.log(`playerResult ${playerResult} || computerResult ${computerResult}`)
        } else {
            console.log(playRound(playerSelection, computerSelection))
            console.log(`playerResult ${playerResult} || computerResult ${computerResult}`)
        }
    }
    if (playerResult > computerResult){
        // return `playerResult ${playerResult} || computerResult ${computerResult}`
        return "Player won!"
    } else if (computerResult > playerResult){
        // return `playerResult ${playerResult} || computerResult ${computerResult}`
        return "Computer won!"
    } else if (playerResult == computerResult){
        // return `playerResult ${playerResult} || computerResult ${computerResult}`
        return "Draw!"
    }
    
}
console.log(playGame())