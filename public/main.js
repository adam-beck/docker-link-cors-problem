(function() {

  var button = document.querySelector('button');


  button.addEventListener('click', function() {
    var request = new XMLHttpRequest();
    // can get this to work (by attaching to the container and changing the url to match 
    // the ip in the docker environment variable)
    // request.open('GET', 'http://172.17.0.2/api', true);

    // cannot get this to work
    // get a CORS error even though the app works with the above configuration and the server
    // has CORS enabled; doesn't even seem to be hitting the server
    request.open('GET', 'http://nodeapp/api', true);
    // request.open('GET', 'http://localhost/api', true);
    // request.open('GET', 'http://172.17.0.2/api', true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);

        alert('Success!');
      }
    };

    request.onerror = function() {
      alert('Error: check console');
    };

    request.send();
  });

})();
