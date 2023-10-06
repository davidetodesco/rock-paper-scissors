const computerChoice = getComputerChoice()
let userChoice = prompt("What do you choose")
let computerScore = 0
let userScore = 0

if (userChoice.toLowerCase() === 'rock') {
  userChoice = 'rock'
} else if (userChoice.toLowerCase() === 'paper') {
  userChoice = 'paper'
} else if (userChoice.toLowerCase() === 'scissors') {
  userChoice = 'scissors'
} else {
  userChoice = prompt("Seems like something was wrong. Try to type it again").toLowerCase()
}

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
        return 'rock';
        case 1:
        return 'paper';
        case 2:
        return 'scissors';
    }
};

while ((userScore !== 3) && (computerScore !== 3)) {
  function game() {
    if (computerChoice === userChoice) 
      return "it's a tie";
    else if (
     (computerChoice === 'rock' && userChoice === 'scissors') ||
     (computerChoice === 'scissors' && userChoice === 'paper') || 
     (computerChoice === 'rock' && userChoice === 'scissors')
     ) {
      computerScore = computerScore + 1 
      return "computer won";
    } else {
      userScore = userScore + 1
      return 'user won';
    };}
  };

if ((userScore === 3) || (computerScore === 3)) {
  console.log('The game is over')
  if (userScore === 3) {
    console.log('You won!')
  }
  if (computerScore === 3) {
    console.log('You lost!')
  }
} else if ((userScore !== 3) && (computerScore !== 3)){
  
}

let score = computerScore + '-' + userScore

console.log(computerChoice)
console.log(userChoice)
console.log(game)
console.log(computerScore)
console.log(userScore)
console.log(score)