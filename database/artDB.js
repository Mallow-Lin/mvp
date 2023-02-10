const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

let artSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  fileName: String,
  EnglishName: String,
  SpanishName: String,
  ChineseName: String,
  JapaneseName: String,
  KoreanName: String,
  image: String,
  buyPrice: Number,
  sellPrice: Number,
  hasFake: Boolean,
  museumDescription: String
})

let Arts = mongoose.model('Arts', artSchema);

let save = (arts) => {
  return new Promise ((resolve, reject) => {
    for (let art in arts) {
      Arts.findOne({id: arts[art].id})
        .then((result) => {
          if (result) {
            reject('art save already')
          } else {
            var newArt = new Arts ({
              id: arts[art].id,
              fileName: arts[art]['file-name'],
              EnglishName: arts[art].name['name-USen'],
              SpanishName: arts[art].name['name-USes'],
              ChineseName: arts[art].name['name-CNzh'],
              JapaneseName: arts[art].name['name-JPja'],
              KoreanName: arts[art].name['name-KRko'],
              image: arts[art]['image_uri'],
              buyPrice: arts[art]['buy-price'],
              sellPrice: arts[art]['sell-price'],
              hasFake: arts[art].hasFake,
              museumDescription: arts[art]['museum-desc']
            })
            resolve(newArt.save())
          }
        })
    }
  })
}

module.exports.Arts = Arts;
module.exports.save = save;