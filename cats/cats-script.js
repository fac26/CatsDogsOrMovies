fetch(url.get20)
  .then(getResponse)
  .then(processIntoGrid)
  .catch(catchErrors);