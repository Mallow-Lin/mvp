import React, {useState, useEffect} from 'react';
import $ from 'jquery';
import Popup from './Popup.js'

const Arts = () => {
  const [arts, setArts] = useState([]);
  const [popup, showPopup] = useState(false);
  const [interest, setInterest] = useState({});

  const fetchArts = () => {
     $.ajax({
      type: 'POST',
      url: 'http://localhost:5000/Art',
      success: () => {
        $.ajax({
          type:'GET',
          url: 'http://localhost:5000/Art',
          success: (data) => {
            setArts(data);
          }
        })
      }
     })
  }

  useEffect(() => {
    fetchArts();
  }, [])

  return (
      <div style={{'textAlign': 'center', backgroundImage: "url(" + "https://images7.alphacoders.com/102/1024174.png" + ")", width: '100vw', height: '100vh', 'overflow-y': 'scroll'}}>
        <h1>Arts</h1>
        <main>
          <div>{arts.map((art) => {
            return (
              <button style={{width: 500, margin: 40}} onClick={() => {showPopup(true); setInterest(art); Popup(interest);}}>
                <img src={art.image} style={{height: '100%', width: '100%'}}/>
                <div style={{fontSize: 20, color: '#68b893'}}>{art.EnglishName} / {art.SpanishName} / {art.ChineseName}</div>
                <div style={{fontSize: 20, color: '#68b893'}}>{art.JapaneseName} / {art.KoreanName}</div>
                <div>Purchase price: {art.buyPrice}</div>
                <div>Re-sale price: {art.sellPrice}</div>
                <div>Is there fake on the market? {art.hasFake.toString()}</div>
                <div>-------------------------------------------</div>
                <div>Museum Description: {art.museumDescription}</div>
              </button>
            )
          })}</div>
        </main>
      </div>

  )
}

export default Arts;