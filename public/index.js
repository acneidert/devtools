fetch('/index.html')
  .then(function(response) {
    return response.text();
  })
  .then(function(body) {
    document.querySelector('#main').innerHTML = body;
  });