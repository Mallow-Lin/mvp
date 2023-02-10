const express = require('express');
let app = express();
const path = require('path');
const API = require('../helper/API.js');
const villagerDB = require('../database/villagerDB.js')
const fishDB = require('../database/fishDB.js')
const artDB = require('../database/artDB.js')
const songDB = require('../database/songDB.js')

app.use(express.static(path.join(__dirname, '../client')));

app.post('/Villagers', (req, res) => {
  API.getInfo('http://acnhapi.com/v1/villagers')
    .then((villagers) => { return villagerDB.save(villagers.data); })
    .catch((err) => {console.log('err getVillagers', err); })
    .then(() => {res.sendStatus(201); })
})

app.get('/Villagers', (req, res) => {
  villagerDB.Villagers.aggregate([
    { $sample: { size: 50 } }
  ])
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log('err retrieve database', err);
    })
})

app.get('/Villagers/get', (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    API.getInfo(`http://acnhapi.com/v1/villagers/${id}`)
      .then((data) => {
        villagerDB.interestSave(data.data);
      })
      .catch((err) => {
        console.log('err getting villager', err);
      })
      .then(() => {
        res.sendStatus(200);
      })
  } else if (req.query.term) {
    const villager = req.query.term;
    villagerDB.Villagers.find({EnglishName: villager.toLowerCase()} || {SpanishName: villager.toLowerCase()} || {ChineseName: villager} || {KoreanName: villager} || {JapaneseName: villager})
      .then((data) => {
        var id = data[0].id
        API.getInfo(`http://acnhapi.com/v1/villagers/${id}`)
          .then((villager) => {
            villagerDB.interestSave(villager.data);
          })
          .catch((err) => {
            console.log('err getting data', err);
          })
          .then(() => {
            res.json(id);
          })
      })
      .catch((err) => {
        res.sendStatus(404);
      })
  }
})

app.get('/Villagers/getInterest', (req, res) => {
  var id = req.query.id;
  villagerDB.interestVillager.find({id: id})
    .then((data) => {
      res.send(data[0]);
    })
    .catch((err) => {
      console.log('err getting villager', err);
    })
})

/////////////////////

app.post('/Fish', (req, res) => {
  API.getInfo('http://acnhapi.com/v1/fish')
    .then((data) => {
      return fishDB.save(data.data)
    })
    .catch((err) => {console.log('err getFishes', err); })
    .then(() => {res.sendStatus(201); })
})

app.get('/Fish', (req, res) => {
  fishDB.Fishes.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log('err retrieve database', err);
    })
})

//////////////

app.post('/Art', (req, res) => {
  API.getInfo('http://acnhapi.com/v1/art')
    .then((data) => {
      return artDB.save(data.data);
    })
    .catch((err) => (
      console.log('err retrieve database', err)
    ))
    .then(() => {
      res.sendStatus(201)
    })
})

app.get('/Art', (req, res) => {
  artDB.Arts.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log('err retrieve database', err);
    })
})
////////////
app.post('/Song', (req, res) => {
  API.getInfo('http://acnhapi.com/v1/songs')
    .then((data) => {
      return songDB.save(data.data);
    })
    .catch((err) => (
      console.log('err retrieve database', err)
    ))
    .then(() => {
      res.sendStatus(201)
    })
})

app.get('/Song', (req, res) => {
  songDB.Songs.find({})
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