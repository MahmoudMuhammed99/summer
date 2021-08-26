const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = '4900';

const app = express();

mongoose.connect('mongodb://localhost/library', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.Promise = global.Promise;
app.use(bodyParser.json());

app.use('/api', require('./controllers/routs'));

app.use(function (err, req, res, next) {
  res.status(422).send({
    error: err.message,
  });
});


app.listen(port, () => {
  console.log('Listening for requests on port: ' + port);
});