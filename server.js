var http = require('http');
var express = require('express');
var path = require('path');

var app = express();
var server = http.createServer(app);
app.use('/static',express.static('./styles'));
app.use('/static', express.static('./scripts'));
app.use('/static', express.static('.'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(1337, function () {
    console.log("Listening to port 1337");
});
