import React, {useState, useEffect} from 'react';
import $ from 'jquery';

const Song = () => {
  const [songs, setSongs] = useState([])

  const fetchSongs = () => {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:5000/Song',
      success: () => {
        $.ajax({
          type:'GET',
          url: 'http://localhost:5000/Song',
          success: (data) => {
            setSongs(data);
          }
        })
      }
     })
  }

  useEffect(() => {
    fetchSongs();
  }, []);


  return (
      <div style={{'textAlign': 'center', backgroundImage: "url(" + "https://animalcrossingworld.com/wp-content/uploads/2020/03/my-nintendo-wallpaper-animal-crossing-new-horizons-island-landscape.jpg" + ")", width: '100vw', height: '100vh', 'overflow-y': 'scroll'}}>
        <h1>Song</h1>
        <div>{songs.map((song) => {
          return (
            <button style={{width: 500, margin: 40}} onClick={() => {showPopup(true); setInterest(song); Popup(interest);}}>
              <img src={song.image} style={{height: '80%', width: '80%'}}/>
              <audio src={song.musicAudio} controls/>
              <div style={{fontSize: 20, color: '#68b893'}}>{song.EnglishName} / {song.SpanishName} / {song.ChineseName}</div>
              <div style={{fontSize: 20, color: '#68b893'}}>{song.JapaneseName} / {song.KoreanName}</div>
              <div>Purchase price: {song.buyPrice}</div>
              <div>Re-sale price: {song.sellPrice}</div>
           </button>
          )
        })}</div>
      </div>
  )
}

export default Song;