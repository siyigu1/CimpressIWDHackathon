var Db = function () {};
var AWS = require('aws-sdk');
AWS.config.update({region:'us-west-2'});

var md5 = require("blueimp-md5");

Db.prototype.update = function(information){
	information.time = Date.now();
	information.entryId = md5(Date.now());
	console.log(information);

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