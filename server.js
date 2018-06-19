// getting express and body parser
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8200;

// get method
app.get('/', function (req, res) {
    res.status(200).json({
        status: 'success'
    });
});

// post method
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/data', (req, res) => {
  var result = {'data': req.body}
  res.send(result)
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);

