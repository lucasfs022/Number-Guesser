let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (human, computer, target) => {
  if (human < 0 || human > 9 || human === "" ) {
    alert('Please make sure your guess is between 0 and 9.');
  };

  let humanGuess =  Math.abs(target - human);
  let computerGuess = Math.abs(target - computer);
  if (humanGuess <=  computerGuess) {
    return true;
  } else {
    return false;
  };
};
// console.log(compareGuesses(5, 6, 9));

const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
}

const advanceRound = () => currentRoundNumber += 1;