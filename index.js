var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var app = express();

app.get('/', function(req, res){
  //
});

app.listen('3000');
console.log('Listening port 3000');

module.exports = app;
