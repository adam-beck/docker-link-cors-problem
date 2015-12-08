var express = require('express');
var app = express();
const port = process.env.PORT || 3000;

app.use(function(req, res, next) {
  console.log('Using CORS for request');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api', function(req, res) {
  res.send({name: 'Bugs Bunny', age: 72});
  res.end();
});

app.listen(port, function() {
  console.log('Listening on port ' + port + '...');
});
