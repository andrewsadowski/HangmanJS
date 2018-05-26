const getPuzzle = async wordCount => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);

  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error('Unable to fetch puzzle');
  }
};

const getCountry = countryCode => {
  return fetch('http://restcountries.eu/rest/v2/all')
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Fetch fucked up');
      }
    })
    .then(data => data.find(country => country.alpha2Code === countryCode))
    .then(data => data.name);
};

//callback

// const getCountry = (countryCode, callback) => {
//   const countryRequest = new XMLHttpRequest();

//   countryRequest.addEventListener('readystatechange', e => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText);
//       const countryFinder = data.find(country => country.alpha2Code === countryCode);
//       callback(undefined, countryFinder);
//     } else if (e.target.readyState === 4) {
//       callback('An error has occured', undefined);
//     }
//   });
//   countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
//   countryRequest.send();
// };

const getLocation = () => {
  return fetch(`http://ipinfo.io/json?token=df986dbbca6e6f`).then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Fetch failed');
    }
  });
};
getLocation()
  .then(data => {
    return getCountry(data.country);
  })
  .then(country => {
    console.log(country);
  })
  .catch(err => {
    console.log(err);
  });
