const guessesElement = document.querySelector('#guesses');
const puzzleElement = document.querySelector('#puzzle');
const game1 = new Hangman('cat', 2);

puzzleElement.textContent = game1.getPuzzle();
guessesElement.textContent = game1.getStatusMessage();
console.log(game1.status);

window.addEventListener('keypress', function(e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleElement.textContent = game1.getPuzzle();
  guessesElement.textContent = game1.getStatusMessage();
});
