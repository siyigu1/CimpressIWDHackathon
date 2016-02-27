var express = require('express');
var app = express();
app.use(express.static('public'));

var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var db = require('./db.js');

/**
 * whatever get passed through query string get saved in db
 * for example, if you call /tech-form?name=something&email=something&random=something
 * it will save as
 * {
 * 	  "name": "something",
 *	  "email": "something",
 *    "random": "something"
 * }
 */
app.post('/tech-form', function(req, res){
	console.log("posting tech contest entry");
	db.update(req.query, "design_contest_submissions", function(status){
		if(status){
			res.status(200).send("successfully posted tech contest entry");
		}
		else{
			res.status(500).send("failed to post tech contest entry");
		}
	});
});

//see comment above for how to use
app.post('/receipe-form', function(req, res){
	console.log("posting receipe");
	db.update(req.query, "receipe", function(status){
		if(status){
			res.status(200).send("successfully posted receipe entry");
		}
		else{
			res.status(500).send("failed to post receipe entry");
		}
	});
});

app.listen(3000, function () {
  console.log('listening on port 3000');
});