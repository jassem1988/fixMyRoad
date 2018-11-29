//Global libraries
const express    = require('express'),
      bodyParser = require('body-parser');
const mongoose = require('mongoose');




//Config Express
var app = express();

//Config port for Heroku
const port = process.env.PORT || 4000;

//Config middleware to parse json
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('it works')
});






app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
