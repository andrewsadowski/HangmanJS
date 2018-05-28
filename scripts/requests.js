const getPuzzle = async wordCount => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);

  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error('Unable to fetch puzzle');
  }
};

const getCountry = async countryCode => {
  const response = await fetch('http://restcountries.eu/rest/v2/all');

  if (response.status === 200) {
    const data = await response.json();
    const countryObj = await data.find(country => country.alpha2Code === countryCode);
    return await countryObj;
  } else {
    throw new Error('Fetch fucked up');
  }
};

const getLocation = async () => {
  const response = await fetch(`http://ipinfo.io/json?token=df986dbbca6e6f`);

  if (response.status === 200) {
    const location = await response.json();
    return location;
  } else {
    throw new Error('Fetch failed');
  }
};

const getCurrentCountry = async () => {
  const location = await getLocation();
  const countryInfo = await getCountry(location.country);
  return countryInfo;
};

// getCurrentCountry()
//   .then(country => {
//     console.log(country.name);
//   })
//   .catch(err => {
//     console.log(err);
//   });

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

// getLocation()
//   .then(data => {
//     return getCountry(data.country);
//   })
//   .then(country => {
//     console.log(country);
//   })
//   .catch(err => {
//     console.log(err);
//   });
