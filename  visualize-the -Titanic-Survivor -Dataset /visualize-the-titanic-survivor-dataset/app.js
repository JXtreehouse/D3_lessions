var express = require('express');
var path = require('path');

var app = express();


//our only route
app.use('/', function(req,res) {
	res.sendFile(__dirname + '/index.html')
});

var server = app.listen(process.env.PORT || 5000, function() {
	 
	var host = server.address().address
	var port = server.address().port


	console.log("Example app listening at http://%s:%s", host, port)
}) 