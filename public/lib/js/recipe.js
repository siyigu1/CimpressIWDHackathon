$(document).ready(function(){
	$(".pdf-download").on("click", function(){
		console.log("download pdf started");

		var url = "http://htmlpdfapi.com/api/v1/"
		var data = {
			"url": "http://callmenick.com/_development/flexbox-examples/index2.html"
		}

		var success = function(result){
			console.log("success")
			console.log(result)
		}

		var headers = {
			"Authentication": "Token 7Kx0RD6hOmeHKrsEG-DpdUX6C0Sw3IKU"
		}

		// Test
		$.ajax({
		  type: "POST",
		  url: url,
		  data: data,
		  success: success,
		  headers: headers,
		  crossDomain: true
		});
	})
})