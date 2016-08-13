var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/data', function(req, res){
	var value = req.query.value;
	console.log(value);
	res.end(value);
});

app.listen(port, function () {
  console.log('Example app listening on port', port);
});
