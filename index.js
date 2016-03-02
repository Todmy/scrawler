var express = require('express');

var routes = require('./routes');

var app = express();
var url = 'http://olx.ua/kiev/';

routes(app, url);

app.listen('3000');
console.log('Listening port 3000');

module.exports = app;
