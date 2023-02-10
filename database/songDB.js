const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

let songSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  fileName: String,
  EnglishName: String,
  SpanishName: String,
  ChineseName: String,
  JapaneseName: String,
  KoreanName: String,
  image: String,
  musicAudio: String,
  buyPrice: Number,
  sellPrice: Number,
})

let Songs = mongoose.model('Songs', songSchema);

let save = (songs) => {
  return new Promise ((resolve, reject) => {
    for (let song in songs) {
      Songs.findOne({id: songs[song].id})
        .then((result) => {
          if (result) {
            resolve('song saved already')
          } else {
            var newSong = new Songs ({
              id: songs[song].id,
              fileName: songs[song]['file-name'],
              EnglishName: songs[song].name['name-USen'],
              SpanishName: songs[song].name['name-USes'],
              ChineseName: songs[song].name['name-CNzh'],
              JapaneseName: songs[song].name['name-JPja'],
              KoreanName: songs[song].name['name-KRko'],
              image: songs[song]['image_uri'],
              musicAudio: songs[song]['music_uri'],
              buyPrice: songs[song]['buy-price'],
              sellPrice: songs[song]['sell-price'],
            })
            resolve(newSong.save())
          }
        })
    }
  })
}

module.exports.Songs = Songs;
module.exports.save = save;