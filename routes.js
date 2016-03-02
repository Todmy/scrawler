var request = require('request');
var cheerio = require('cheerio');
var R = require('ramda');

module.exports = function(app, url) {
  app.get('/', function(req, res) {
    var json = {};

    request(url, function(error, response, html) {
      if (!error) {
        var $ = cheerio.load(html);

        $('h15').filter(function() {
          var data = $(this);

          json.title = data.children.first().text();
          json.release = data.childern().last().childern().text();
        });

        $('.star-box-giga-star').filter(function() {
          var data = $(this);

          json.rating = data.text();
        });
      }
    });

    res.send(JSON.stringify(json, null, 4));
  });


  app.get('/api/*', function(req, res) {
    console.log('---first');
  });

  app.get('/api/tool/', function(req, res) {
    console.log('---second');
  });
}
