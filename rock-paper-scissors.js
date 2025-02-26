
console.log("Welcome to Rock Paper Scissors!")
  let humanScore = 0;
  let computerScore = 0;
  const choices = ["rock", "paper", "scissors"]
  const container = document.querySelector("#container")
  const buttons = document.querySelectorAll("button")
  const humanChose = document.querySelector("#humanChose")
  const computerChose = document.querySelector("#computerChose")
  const roundWinner = document.querySelector("#roundWinner")
  const runningScore = document.querySelector("#runningScore")
  const gameWinner = document.querySelector("#gameWinner")
  
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const humanChoice = button.textContent.toLowerCase()
      const computerChoice = getComputerChoice()
      if (humanScore < 5 && computerScore < 5) {
      playRound(humanChoice, computerChoice)
      }
      if (humanScore === 5 || computerScore === 5) {
        return(winner())
      }
      })
  })

  function winner() {
    if (humanScore === 5) {
      gameWinner.textContent = "Congratulations! You won!"
    }
    else if (computerScore === 5) {
      gameWinner.textContent = "Computer won! good luck next time!"
    }
  }

  function getComputerChoice() {
    let num = choices[Math.floor(Math.random() * choices.length)]
    return(num)
  }

  function playRound(humanChoice, computerChoice) {
    humanChose.textContent = `You chose ${humanChoice}`;
    computerChose.textContent = `Computer chose ${computerChoice}`
    if (humanChoice === computerChoice) {
      roundWinner.textContent = "It's a Tie!"
    }
    
    else if (
        (humanChoice === "rock" && computerChoice === "paper")||
        (humanChoice === "paper" && computerChoice === "scissors")||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        ++computerScore;
        roundWinner.textContent = "Computer won!"
    }
    
    else {
        ++humanScore;
        roundWinner.textContent = "Player won!"
    }
        runningScore.textContent = `Computer score: ${computerScore} Your score: ${humanScore}`
    }
    



