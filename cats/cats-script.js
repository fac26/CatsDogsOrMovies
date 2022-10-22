fetch(url.get50)
  .then(getResponse)
  .then(processIntoGrid)
  .catch(catchErrors);