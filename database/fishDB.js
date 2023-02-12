const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const fishSchema =mongoose.Schema({
  id: { type: Number, unique: true },
  fileName: String,
  EnglishName: String,
  SpanishName: String,
  ChineseName: String,
  JapaneseName: String,
  KoreanName: String,
  icon: String,
  image: String,
  northernAvailability: String,
  southernAvailability: String,
  location: String,
  price: Number,
  catchPharse: String
})

let Fishes = mongoose.model('fishes', fishSchema);

let save = (fishes) => {
  return new Promise ((resolve, reject) => {
    for (let fish in fishes) {
      Fishes.findOne({id: fishes[fish].id})
        .then((result) => {
          if (result) {
            reject('fish saved already');
          } else {
            var newFish = new Fishes ({
              id: fishes[fish].id,
              fileName: fishes[fish]['file-name'],
              EnglishName: fishes[fish].name['name-USen'],
              SpanishName: fishes[fish].name['name-USes'],
              ChineseName: fishes[fish].name['name-CNzh'],
              JapaneseName: fishes[fish].name['name-JPja'],
              KoreanName: fishes[fish].name['name-KRko'],
              icon: fishes[fish]['icon_uri'],
              image: fishes[fish]['image_uri'],
              northernAvailability: fishes[fish].availability['month-northern'],
              southernAvailability: fishes[fish].availability['month-southern'],
              location: fishes[fish].availability.location,
              price: fishes[fish].price,
              catchPharse: fishes[fish]['catch-phrase']
            })
            resolve(newFish.save());
        }
      })
    }
  })
}

module.exports.save = save;
module.exports.Fishes = Fishes;