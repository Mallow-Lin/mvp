const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true
})

let villagersSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  fileName: String,
  EnglishName: String,
  SpanishName: String,
  chineseName: String,
  JapaneseName: String,
  KoreanName: String,
  icon: String,
  image: String
});

let Villagers = mongoose.model('Villagers', villagersSchema);

let save = (villagers) => {
  for (let member in villagers) {
    Villagers.findOne({id: villagers[member].id})
      .then((result) => {
        if (result) {
          console.log('user saved already');
        } else {
          var newMember = new Villagers ({
            id: villagers[member].id,
            fileName: villagers[member]['file-name'],
            EnglishName: villagers[member].name['name-USen'],
            SpanishName: villagers[member].name['name-USes'],
            chineseName: villagers[member].name['name-CNz'],
            JapaneseName: villagers[member].name['name-JPja'],
            KoreanName: villagers[member].name['name-KRko'],
            icon: villagers[member].icon_uri,
            image: villagers[member].image_uri
          })
          newMember.save((err) => {
            if (err) {
              console.log('save failed', err);
            } else {
              console.log('save successfully');
            }
          })
        }
      })
  }
}

module.exports.save = save;
module.exports.Villagers = Villagers;