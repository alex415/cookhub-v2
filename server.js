var express = require('express'),
    app = express(),
    request = require('request'),
    bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('server started on localhost:3000');
});