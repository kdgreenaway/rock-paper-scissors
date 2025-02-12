console.log("Welcome to Rock Paper Scissors!")

// function that returns Rock , paper , or scissors randomly
function getComputerChoice(guess) {
    let number = Math.floor(Math.random() * guess)
    if (number == 0) return "Rock";
    else if (number == 1) return "Scissors";
    else return "Paper";
}
let computerMove = getComputerChoice(3)
console.log(computerMove)
// -------------------------------------

// function that logs human choice
function getHumanChoice() {
    let userInput = prompt("Rock Paper Scissors").toLowerCase();
    if (userInput === "rock") {
        console.log("Rock");
    }
    else if (userInput === "scissors") {
        console.log("Scissors");
    }
    else if (userInput === "paper") {
        console.log("Paper");
    }
    else {
        console.log("Try again");
    }
    }

    console.log(getHumanChoice())
    // ----------------------------------

    // declare player score variables
    let humanScore = 0;
    let computerScore = 0;
    const rock = "rock" > "scissors"
    const scissors = "scissors" > "paper"
    const paper = "paper" > "rock"
    // ----------------------------------

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice > computerChoice) {
        console.log(++humanScore)
    }
    else if (computerChoice > humanChoice) {
        console.log(++computerScore)
    }
    else {
        console.log("It's a tie!")
    }
}

const humanSelection = getHumanChoice
const computerSelection = getComputerChoice

playRound(humanSelection, computerSelection)

// rock>scissors
// scissors>paper 
// paper>rock