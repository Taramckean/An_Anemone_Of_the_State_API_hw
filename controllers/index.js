const express = require('express');
const router = new express.Router();

router.use('/anemone', require('./anemonae'));

router.get('/', function(req, res){
  res.json({data: "Welcome to the sea anemonae page. Did you know anemone comes from the Greek menaing 'daughter of the wind', like creatures swaying in the wind of the sea."})
})

router.get('/about', function(req, res){
  res.json({data:" Have you ever tried to say the types of sea anemonae 3 times fast?"})
})

module.exports = router;
