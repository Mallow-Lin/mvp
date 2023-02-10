const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

let villagersSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  fileName: String,
  EnglishName: String,
  SpanishName: String,
  ChineseName: String,
  JapaneseName: String,
  KoreanName: String,
  icon: String
});

let Villagers = mongoose.model('Villagers', villagersSchema);

let save = (villagers) => {
  return new Promise((resolve, reject) => {
    for (let member in villagers) {
      Villagers.findOne({id: villagers[member].id})
        .then((result) => {
          if (result) {
            reject('villager saved already');
          } else {
            var newMember = new Villagers ({
              id: villagers[member].id,
              fileName: villagers[member]['file-name'],
              EnglishName: villagers[member].name['name-USen'].toLowerCase(),
              SpanishName: villagers[member].name['name-USes'].toLowerCase(),
              ChineseName: villagers[member].name['name-CNzh'],
              JapaneseName: villagers[member].name['name-JPja'],
              KoreanName: villagers[member].name['name-KRko'],
              icon: villagers[member].icon_uri,
            })
            resolve(newMember.save())
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
  })
}

let interestSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  fileName: String,
  EnglishName: String,
  SpanishName: String,
  ChineseName: String,
  JapaneseName: String,
  KoreanName: String,
  icon: String,
  image: String,
  Personality: String,
  Birthday: String,
  Species: String,
  Gender: String,
  Hobby: String,
  CatchPhrase: String
})
let interestVillager = mongoose.model('interestVillager', interestSchema);

let interestSave = (villager) => {
  return new Promise ((resolve, reject) => {
    interestVillager.findOne({id: villager.id})
      .then((result) => {
        if (result) {
          // reject('villager saved already');
        } else {
          var newMember = new interestVillager ({
            id: villager.id,
            fileName: villager['file-name'],
            EnglishName: villager.name['name-USen'].toLowerCase(),
            SpanishName: villager.name['name-USes'].toLowerCase(),
            ChineseName: villager.name['name-CNzh'],
            JapaneseName: villager.name['name-JPja'],
            KoreanName: villager.name['name-KRko'],
            icon: villager.icon_uri,
            image: villager.image_uri,
            Personality: villager.personality,
            Birthday: villager['birthday-string'],
            Species: villager.species,
            Gender: villager.gender,
            Hobby: villager.hobby,
            CatchPhrase: villager.saying
          })
          resolve(newMember.save());
        }
      })
      .catch((err) => {
        reject(err);
      })
    })
  }
module.exports.save = save;
module.exports.Villagers = Villagers;

module.exports.interestSave = interestSave;
module.exports.interestVillager = interestVillager;
