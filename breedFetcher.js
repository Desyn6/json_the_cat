const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(url , (error, response, body) => {
    let desc;
    
    if (error) {
      desc = null;
    } else if (JSON.parse(body)[0] === undefined) {
      desc = "Breed not found!";
    } else {
      desc = JSON.parse(body)[0].description;
    }

    callback(error, desc);
  });
};

module.exports = { fetchBreedDescription };