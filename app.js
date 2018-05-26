const guessesElement = document.querySelector('#guesses');
const puzzleElement = document.querySelector('#puzzle');
const game1 = new Hangman('cat ear', 2);

puzzleElement.textContent = game1.puzzle;
guessesElement.textContent = game1.statusMessage;
console.log(game1.status);

window.addEventListener('keypress', e => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleElement.textContent = game1.puzzle;
  guessesElement.textContent = game1.statusMessage;
});

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', e => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    console.log(data);
  } else if (e.target.readyState === 4) {
    console.log('An error has occured');
  }
});

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3');
request.send();

const countryCode = 'US';
const countryRequest = new XMLHttpRequest();

countryRequest.addEventListener('readystatechange', e => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    const countryFinder = data.find(country => country.alpha2Code === countryCode);
    console.log(countryFinder.name);
  }
});

countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
countryRequest.send();
