const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (err, des) => {
  if (!err) {
    console.log('err: ' + err);
  } else {
    console.log(des);
  }
});