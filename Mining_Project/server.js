var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(express.static(path.join(__dirname, '')));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname, 'index.html'));
});

var server = app.listen(process.env.PORT || 8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Application listening at http://%s:%s", host, port)
})