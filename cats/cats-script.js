getBreeds();

fetch(url25)
  .then(getResponse)
  .then(processResponse)
  .catch(catchErrors);