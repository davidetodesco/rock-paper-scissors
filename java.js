const computerChoice = getComputerChoice()
let computerScore = 0
let userScore = 0

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

function game() {
  if (computerChoice === userChoice) 
    return "tie";
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
}}

function endgame() {
  if (userScore === 3) {
  return 'user won the game!';
} else if (computerScore === 3) {
  return 'computer won the game!';
} else {
  return '';
}}

function whole() {
  let userChoice;
  weaponsButtons.foreach((weapon) => {
    weapon.addEventListener('click', () => {
      if (weapon.classList.contains('rock')) {
      userChoice = 'rock'
      } else if (weapon.classList.contains('paper')) {
      userChoice = 'paper'
      } else {
      userChoice = 'scissors'
    }
    game()
    endgame()
    })
  })
} 
console.log(computerChoice)
console.log(userChoice)
console.log(game())
console.log(computerScore)
console.log(userScore)
document.getElementById('userscore').innerHTML = userScore;
document.getElementById('computerscore').innerHTML = computerScore;
document.getElementById('roundresult').innerHTML = game()