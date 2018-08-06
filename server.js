const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, function(){
  console.log("yEEhAW, we're up and running!");
});

app.use(require('./controllers/index'));
