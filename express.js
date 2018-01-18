var express = require('express');
var compression = require('compression');
var app = module.exports.prod = exports.prod = express();

var devAPI = 'http://localhost:1337';
var prodAPI = '';

app.use(compression());

app.use(express.static('dist'));

var proxy = require('express-http-proxy');
app.use('/api', proxy(devAPI));

app.get('/*', function(req, res, next) {
  res.sendFile(__dirname + '/dist/index.html');
})

var port = process.env.PORT || 8000;

app.listen(port);
