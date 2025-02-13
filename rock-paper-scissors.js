  // declare player score variables
  let humanScore = 0;
  let computerScore = 0;
  // ----------------------------------

console.log("Welcome to Rock Paper Scissors!")

// function that returns Rock , paper , or scissors randomly
function getComputerChoice() {
    let number = Math.floor(Math.random() * 3)
    if (number == 0) {
        return "rock";
    }
    else if (number == 1) {
        return "scissors";
    }
    else {
        return "paper";
    }
}
// -------------------------------------

// function that logs human choice
function getHumanChoice() {
    let userInput = prompt("Rock Paper Scissors").toLowerCase();
    if (userInput === "rock") {
        return "rock";
    }
    else if (userInput === "scissors") {
        return "scissors";
    }
    else if (userInput === "paper") {
        return "paper";
    }
    else {
        alert("Choose rock, paper, or scissors");
        getHumanChoice();
    }
    }
    // ----------------------------------

  

function playRound(humanChoice, computerChoice) {
    console.log(`You chose ${humanChoice}`);
    console.log(`Computer chose ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a Tie!");
    }

    else if (
        (humanChoice === "rock" && computerChoice === "paper")||
        (humanChoice === "paper" && computerChoice === "scissors")||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        computerScore++;
        console.log("Computer won!");
    }

    else {
        humanScore++;
        console.log("Human won!");
    }
    console.log(`Computer score: ${computerScore}`, `Your score: ${humanScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);