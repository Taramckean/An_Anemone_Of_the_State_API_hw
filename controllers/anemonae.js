const express = require('express');
const anemoneRouter = new express.Router();

// let anemonae = ["Aiptasia", "Heteractis", "Stichodactyla", "Anemonia", "Enthemonae", "Macrodactyla doreensis"];
let anemonae = [{name: "Aiptasia", commonName: "Enemy anemone"},
{name: "Heteractis", commonName: "Magnificent sea anemone"},
{name: "Stichodactyla", commonName:"Giant carpet anemone"},
{name: "Anemonia", commonName: "Mediterranean snakelocks sea anemone"},
{name: "Enthemonae", commonName: "Spikey face sea anemone"},
{name: "Macrodactyla doreensis", commonName: "Long tentacle or corkscrew sea anemone"}];

//index route
anemoneRouter.get('/', function(req, res){
  res.json(anemonae);
});


//show route
anemoneRouter.get('/:id', function(req, res){
  let index = req.params.id;
  res.json(anemonae[index]);
})

//update route
anemoneRouter.put('/:id', function(req, res){
  let index = req.params.id;
  anemonae[index] = req.body.anemone;
  res.json(anemonae);
});

//create route
anemoneRouter.post('/', function(req, res){
  anemonae.push(req.body.anemone);
  res.json(anemonae);
});

//delete route
anemoneRouter.delete('/:id', function(req, res){
  let index = req.params.id;
  anemonae.splice(index, 1);
  res.json(anemonae);
});

module.exports = anemoneRouter;
