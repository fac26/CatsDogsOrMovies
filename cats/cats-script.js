getBreeds();

fetch(imageURL)
  .then(getResponse)
  .then(processResponse)
  .catch(catchErrors);