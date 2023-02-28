const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(url , (error, response, body) => {
    let desc = JSON.parse(body)[0];
    
    if (error) {
      callback(error, null);
      return;
    }
    
    if (!desc) {
      desc = "Breed not found!";
    } else {
      desc = desc.description;
    }

    callback(null, desc);
  });
};

module.exports = { fetchBreedDescription };