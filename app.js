var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var readStream = fs.createReadStream('./public/index.html');
  readStream.pipe(res);
}).listen(3000, 'localhost');
console.log('Server running at localhost:3000/');