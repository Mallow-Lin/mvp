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
    <div>
      <div style={{'textAlign': 'center'}}>
        <h1>Song</h1>
        <div>{songs.map((song) => {
          return (
            <button style={{width: 500, margin: 40}} onClick={() => {showPopup(true); setInterest(song); Popup(interest);}}>
              <img src={song.image} style={{height: '80%', width: '80%'}}/>
              <audio src={song.musicAudio} controls/>
              <div>{song.EnglishName} / {song.SpanishName} / {song.ChineseName}</div>
              <div>{song.JapaneseName} / {song.KoreanName}</div>
              <div>Purchase price: {song.buyPrice}</div>
              <div>Re-sale price: {song.sellPrice}</div>
           </button>
          )
        })}</div>
      </div>
    </div>
  )
}

export default Song;