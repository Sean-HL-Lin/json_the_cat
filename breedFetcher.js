const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`,(err, response, body) => {
  if (!err) {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`Sorry, There is no matched detail about ${process.argv[2]}`);
    } else {
      console.log(data);
      console.log(typeof data);
    }
  } else {
    console.log(err);
  }
});