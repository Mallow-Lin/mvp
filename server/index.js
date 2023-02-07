const express = require('express');
let app = express();
const path = require('path');
const API = require('../helper/API.js');
const mongooseDB = require('../database/mongooseDB.js')
app.use(express.static(path.join(__dirname, '../client')));

app.post('/Villagers', (req, res) => {
  API.getVillagers()
    .then((villagers) => {
      mongooseDB.save(villagers.data);
    })
    .catch((err) => {
      console.log('err getVillagers', err);
    })
    .then(() => {
      res.sendStatus(201);
    })
})

app.get('/Villagers', (req, res) => {
  mongooseDB.Villagers.aggregate([
    { $sample: { size: 50 } }
  ])
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log('err retrieve database', err);
    })
})

let port = 5000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});