const request = require('request');

// Keep only search term
const search = process.argv[2];
// concatenate base api URL with search term
const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + search;

request(url, (error, response, body) => {
  // log code only if error does not occur
  if (error) {
    console.log('Connection error! See error code below:');
    console.log(response && response.statusCode);
  } else {
    // Check if 0th index is undefined
    if (JSON.parse(body)[0] === undefined) {
      console.log("Breed not found!");
    } else {
    // Parse returned JSON string
    // Access index 0 for object
    // Access value at 'description' key
      console.log(JSON.parse(body)[0]['description']);
    }
  }
});