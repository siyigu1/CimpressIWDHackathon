var express = require('express');
var app = express();
app.use(express.static('public'));

var db = require('./db.js');

app.post('/tech-form', function(req, res){
	console.log("tech contest entry posted");
});

app.post('/receipe-form', function(req, res){
	console.log("receipe posted");
});

app.get('/update', function (req, res) {
	var information = {};
	information.name = "test name";
	information.email = "some email";
	information.office = "some office";
	information.file = "some file";
	db.update(information);
});

app.get('/connect', function(req, res){
	db.connect();
});

app.listen(3000, function () {
  console.log('listening on port 3000');
});