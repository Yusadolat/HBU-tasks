// getting express and body parser :smile:
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8200;


// keeping middleware before any route i.e app.get()
app.use(bodyParser.urlencoded({ extended: false }));


// get method
app.get('/',  (req, res) => {
    res.status(200).json({
        status: 'success'
    });
});

// post method
app.post('/data', (req, res) => {
  const result = {'data': 'Any String'}
  res.send(result)
});

// start the server
module.exports = app.listen(port);
console.log('Server started! At http://localhost:' + port);

