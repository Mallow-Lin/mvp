import React, {useState, useEffect}from 'react';
import $ from 'jquery';
import Popup from './Popup.js'

const Fish = () => {
  const [fishes, setFishes] = useState([]);
  const [popup, showPopup] = useState(false);
  const [interest, setInterest] = useState({});

  const fetchFishes = () => {
    $.ajax({
      url: 'http://localhost:5000/Fish',
      type: 'POST',
      success: () => {
        $.ajax({
          url: 'http://localhost:5000/Fish',
          type: 'GET',
          success: (data) => {
            setFishes(data);
          }
        })
      }
    })
  }

  useEffect(() => {
    fetchFishes();
  }, [])

  return (
    <div>
      <div style={{'textAlign': 'center'}}>
        <h1>Fish</h1>
        <main>
          <div>{fishes.map((fish) => {
            return (
              <button style={{width: 300, margin: 40}} onClick={() => {showPopup(true); setInterest(fish); Popup(interest);}}>
                <img src={fish.icon} />
                <div>{fish.EnglishName} / {fish.SpanishName} / {fish.ChineseName}</div>
                <div>{fish.JapaneseName} / {fish.KoreanName}</div>
              </button>
            )
          })}</div>
        </main>
      </div>
      <Popup popup={popup} showPopup={showPopup}>
        <img src={interest.image} style={{height: '80%', width: '80%'}}/>
        <ul>
          <li>My English Name is: {interest.EnglishName}</li>
          <li>My Spainish Name is: {interest.SpanishName}</li>
          <li>My Chinese Name is: {interest.ChineseName}</li>
          <li>My Japanese Name is: {interest.JapaneseName}</li>
          <li>My Korean Name is: {interest.KoreanName}</li>
          <li>You can see me at {interest.northernAvailability} months at Northern</li>
          <li>ou can see me at {interest.southernAvailability} months at Southern</li>
          <li>I am a {interest.location} fish</li>
          <li>I can be sold at ${interest.price}</li>
          <li>Villager caught me would likely to say: {interest.catchPharse}</li>
        </ul>
      </Popup>
    </div>
  )
}

export default Fish;