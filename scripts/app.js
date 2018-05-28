const guessesElement = document.querySelector('#guesses');
const puzzleElement = document.querySelector('#puzzle');
let game1;

// puzzleElement.textContent = game1.puzzle;
// guessesElement.textContent = game1.statusMessage;
// console.log(game1.status);

window.addEventListener('keypress', e => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render();
});

const startGame = async () => {
  const puzzle = await getPuzzle('2');
  game1 = new Hangman(puzzle, 5);
  render();
};

const render = () => {
  puzzleElement.innerHTML = '';
  guessesElement.textContent = game1.statusMessage;
  game1.puzzle.split('').forEach(letter => {
    const letterElement = document.createElement('span');
    letterElement.textContent = letter;
    puzzleElement.appendChild(letterElement);
  });
};

document.querySelector('#reset').addEventListener('click', startGame);

startGame();

// getPuzzle('4')
//   .then(puzzle => {
//     console.log(puzzle);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// getCountry('AF')
//   .then(country => {
//     console.log(country.name);
//   })
//   .catch(err => {
//     console.log(err);
//   });
/*
fetch('http://puzzle.mead.io/puzzle', {})
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Unable to fetch');
    }
  })
  .then(data => {
    console.log(`${data.puzzle} from FETCH`);
  })
  .catch(err => {
    console.log(err);
  });
  */

// getCountry('AF', (error, country) => {
//   if (error) {
//     console.log(`Error: ${error}`);
//   } else {
//     console.log(country.name);
//   }
// });

// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', e => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.responseText);
//     console.log(data);
//   } else if (e.target.readyState === 4) {
//     console.log('An error has occured');
//   }
// });

// request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3');
// request.send();

// const countryCode = 'US';
// const countryRequest = new XMLHttpRequest();

// countryRequest.addEventListener('readystatechange', e => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.responseText);
//     const countryFinder = data.find(country => country.alpha2Code === countryCode);
//     console.log(countryFinder.name);
//   }
// });

// countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
// countryRequest.send();
