var express = require('express');
var app = express();
app.use(express.static('public'));

var db = require('./db.js');

app.get('/update', function (req, res) {
	db.update();
});

app.get('/connect', function(req, res){
	db.connect();
});

app.listen(3000, function () {
  console.log('listening on port 3000');
});