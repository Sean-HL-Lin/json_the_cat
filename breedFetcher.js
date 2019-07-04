const request = require('request');


const fetchBreedDescription = function(req, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${req}`,(err, response, body) => {
    if (!err) {
      const data = JSON.parse(body);
      if (!data[0]) {

        let erroMessage = `Sorry, There is no matched detail about ${req}`;
        let context = null;
        callback(erroMessage, context);
        // console.log(`Sorry, There is no matched detail about ${req}`);
      } else {
        callback(err, data[0].description);
        // console.log(data[0].description);
        // console.log(typeof data);
      }
    } else {
      callback(err);
      // console.log(err);
    }
  });
};


module.exports = { fetchBreedDescription };