(function() {

  var button = document.querySelector('button');


  button.addEventListener('click', function() {
    var request = new XMLHttpRequest();
    //request.open('GET', 'http://nodeapp/api', true);
    request.open('GET', 'http://172.17.0.2/api', true);

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
