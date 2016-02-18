var express = require('express');
var bodyParser = require('body-parser');
var baseRoutes = require('./routes/base');
var server = express();
var PORT = 8080;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get('/', function(req, res) {
    res.send('Finalizer server.');
});

server.use('/api', baseRoutes);

server.listen(PORT, function() {
    console.log('Finalizer server running on ' + PORT);
});
