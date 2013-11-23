var express = require('express');
var app = express();
var path = require('path');
var pg = require('pg');
var pings = require('./routes/pings');

app.use(express.logger());
app.use(app.router);
console.log('static: ' + path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/pings', pings.recent);
app.use('/', express.static(path.join(__dirname, 'index.html')));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on port ' + port);
});

