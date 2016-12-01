// Imports the express Node module.
var express = require('express');
var utilModule = require('./util.js');
var reverseString = utilModule.reverseString;
var bodyParser = require('body-parser');
// Creates an Express server.
var app = express();
app.use(bodyParser.text());
// Defines what happens when it receives the `GET /` request
app.get('/', function (req, res) {
res.send('Hello World!');
});
// Starts the server on port 3000!
app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});

// Handle POST /reverse [data]
app.post('/reverse', function (req, res) {
  if (typeof(req.body) === 'string') {
  var reversed = reverseString(req.body);
  res.send(reversed);
  } else {
  // POST did not contain a string. Send an error code back!
  res.status(400).end()
  }
});
