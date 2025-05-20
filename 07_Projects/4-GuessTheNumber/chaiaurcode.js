const submitButton = document.querySelector("#subt");
const guessesDisplay = document.querySelector(".guesses");
const remainingAttemptsDisplay = document.querySelector(".lastResult");
const hintDisplay = document.querySelector(".lowOrHi");

let guessCount = 0;

// Generate a random number between 1 and 100
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100 + 1);
};

// Provide hint to the user
const provideHint = (userGuess) => {
  if (randomNumber < userGuess) {
    hintDisplay.innerHTML = "Number is actually smaller than you think";
  } else {
    hintDisplay.innerHTML = "Number is actually greater than you think";
  }
};

const guessedNumbers = [];

// Check user's guess and update UI accordingly
const handleGuess = (userGuess) => {
  if (randomNumber !== userGuess) {
    guessCount++;
    if (guessCount <= 10) {
      guessedNumbers.push(userGuess);
      guessesDisplay.innerHTML = guessedNumbers.join(", ");
      remainingAttemptsDisplay.innerHTML = 10 - guessCount;
      provideHint(userGuess);
    } else {
      hintDisplay.innerHTML = "Reload the Game";
    }
  } else {
    hintDisplay.innerHTML = "Correct! You guessed the number.";
    guessCount++;
  }
};

// Main function to run on form submission
const processUserGuess = (event) => {
  event.preventDefault();
  const userGuess = parseInt(document.querySelector(".guessField").value);

  if (isNaN(userGuess)) {
    hintDisplay.innerHTML = "Enter a valid number";
  } else {
    handleGuess(userGuess);
  }
};

const randomNumber = generateRandomNumber();

submitButton.addEventListener("click", processUserGuess);
