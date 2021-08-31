let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// this function generates a random number between 0 and 9
const generateTarget = () => Math.floor(Math.random() * 10);

// this function compares the user guess and the computer random number
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  let humanDiff = Math.abs(targetGuess - humanGuess);
  let computerDiff = Math.abs(targetGuess - computerGuess);
  if (humanDiff <= computerDiff) {
    return true;
  }
  return false;
};

// this function updates the current score
const updateScore = str => str === 'human' ? humanScore++ : computerScore++;

// this function increases the round
const advanceRound = () => currentRoundNumber++;