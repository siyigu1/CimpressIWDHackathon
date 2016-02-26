var Db = function () {};
var AWS = require('aws-sdk');
var fs = require("fs");
AWS.config.update({region:'us-west-2'});

Db.prototype.connect = function () {
	var dynamodb = new AWS.DynamoDB();

	var params = {
		TableName : "Movies",
		KeySchema: [       
			{ AttributeName: "year", KeyType: "HASH"},  //Partition key
			{ AttributeName: "title", KeyType: "RANGE" }  //Sort key
		],
		AttributeDefinitions: [       
			{ AttributeName: "year", AttributeType: "N" },
			{ AttributeName: "title", AttributeType: "S" }
		],
		ProvisionedThroughput: {       
			ReadCapacityUnits: 10, 
			WriteCapacityUnits: 10
		}
	};

	dynamodb.createTable(params, function(err, data) {
		if (err) {
			console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
		} else {
			console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
		}
	});
};

Db.prototype.update = function(){
var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing movies into DynamoDB. Please wait.");

var allMovies = JSON.parse(fs.readFileSync('moviedata.json', 'utf8'));
allMovies.forEach(function(movie) {
    var params = {
        TableName: "Receipe",
        Item: {
            "year":  movie.year,
            "title": movie.title,
            "info":  movie.info
        }
    };

    docClient.put(params, function(err, data) {
       if (err) {
           console.error("Unable to add movie", movie.title, ". Error JSON:", JSON.stringify(err, null, 2));
       } else {
           console.log("PutItem succeeded:", movie.title);
       }
    });
});
};
module.exports = new Db();