const getPuzzle = wordCount =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', e => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        resolve(data.puzzle);
      } else if (e.target.readyState === 4) {
        reject('An error has occured');
      }
    });
    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3');
    request.send();
  });

const getCountry = (countryCode, callback) => {
  const countryRequest = new XMLHttpRequest();

  countryRequest.addEventListener('readystatechange', e => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      const countryFinder = data.find(country => country.alpha2Code === countryCode);
      callback(undefined, countryFinder);
    } else if (e.target.readyState === 4) {
      callback('An error has occured', undefined);
    }
  });
  countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
  countryRequest.send();
};
