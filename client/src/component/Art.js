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
    <div>
      <div style={{'textAlign': 'center'}}>
        <h1>Arts</h1>
        <main>
          <div>{arts.map((art) => {
            return (
              <button style={{width: 500, margin: 40}} onClick={() => {showPopup(true); setInterest(art); Popup(interest);}}>
                <img src={art.image} style={{height: '100%', width: '100%'}}/>
                <div>{art.EnglishName} / {art.SpanishName} / {art.ChineseName}</div>
                <div>{art.JapaneseName} / {art.KoreanName}</div>
                <div>Purchase price: {art.buyPrice}</div>
                <div>Re-sale price: {art.sellPrice}</div>
                <div>Is there fake on the market? {art.hasFake}</div>
                <div>Museum Description: {art.museumDescription}</div>
              </button>
            )
          })}</div>
        </main>
      </div>
      {/* <Popup popup={popup} showPopup={showPopup}>
        <img src={interest.image}/>
      </Popup> */}
    </div>
  )
}

export default Arts;