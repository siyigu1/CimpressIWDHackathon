var Db = function () {};
var AWS = require('aws-sdk');
AWS.config.update({region:'us-west-2'});

var fs = require("fs");
var md5 = require("blueimp-md5");

Db.prototype.update = function(information){
	var toUpdate = {};
	var toUpdate.name = information.name;
	var toUpdate.email = information.email;
	var toUpdate.office = information.office;
	var toUpdate.submissionTime = Date.now();
	var toUpdate.entryId = md5(submissionTime);
	var toUpdate.fileName = entryId + ".pdf";
	console.log(toUpdate);

/*
	var docClient = new AWS.DynamoDB.DocumentClient();

	
    docClient.put(params, function(err, data) {
    	if (err) {
        	console.error("Unable to add movie", movie.title, ". Error JSON:", JSON.stringify(err, null, 2));
       	} else {
        	console.log("PutItem succeeded:", movie.title);
       	}
	});*/
};
module.exports = new Db();