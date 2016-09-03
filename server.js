var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/*', require("./routes/api"));

app.listen(port, function () {
  console.log('App listening on port', port);
});

