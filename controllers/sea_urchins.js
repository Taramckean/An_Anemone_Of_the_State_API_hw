const express = require('express');
const seaUrchinRouter = new express.Router();

let seaUrchins = ["Sand dollar", "Paracentrotus", "Echinoida", "Spatangoida", "Psammechinus miliaris", "Echinocorys"];

//index route
seaUrchinRouter.get('/', function(req, res){
  res.json(seaUrchins);
});


//show route
seaUrchinRouter.get('/:id', function(req, res){
  let index = req.params.id;
  res.json(seaUrchins[index]);
})

//update route
seaUrchinRouter.put('/:id', function(req, res){
  let index = req.params.id;
  seaUrchins[index] = req.body.seaUrchin;
  res.json(seaUrchins);
});

//create route
seaUrchinRouter.post('/', function(req, res){
  seaUrchins.push(req.body.seaUrchin);
  res.json(seaUrchins);
});

//delete route
seaUrchinRouter.delete('/:id', function(req, res){
  let index = req.params.id;
  seaUrchins.splice(index, 1);
  res.json(seaUrchins);
});

module.exports = seaUrchinRouter;
