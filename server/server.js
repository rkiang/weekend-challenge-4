var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var port = 5000;

var employee = require('./routes/employee');

app.use(express.static('server/public'));
app.use(bodyParser.json());

app.use('/employee', employee);

app.listen(port, function(){
    console.log('Listening on port', port);
});