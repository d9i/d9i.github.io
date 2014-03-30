var url = require('url');
var http = require('http');
var classif = require('classifier');


http.createServer(function (req, res) {
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify([{name:"hey guise", formatted_number:"32120.07"}]));

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
