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
      <div style={{'textAlign': 'center', backgroundImage: "url(" + "https://images4.alphacoders.com/102/1024173.png" + ")", width: '100vw', height: '100vh', 'overflow-y': 'scroll'}}>
        <h1>Fish</h1>
        <main>
          <div>{fishes.map((fish) => {
            return (
              <button style={{width:300, margin: 40, 'border-radius': 40}} onClick={() => {showPopup(true); setInterest(fish); Popup(interest);}}>
                <img src={fish.icon} />
                <div>{fish.EnglishName} / {fish.SpanishName} / {fish.ChineseName}</div>
                <div>{fish.JapaneseName} / {fish.KoreanName}</div>
              </button>
            )
          })}</div>
        </main>
      </div>
      <Popup popup={popup} showPopup={showPopup}>
        <img src={interest.image} style={{height: '60%', width: '60%'}}/>
        <ul>
          <div>My English name is: {interest.EnglishName}, my Spainish name is: {interest.SpanishName}, my Chinese name is: {interest.ChineseName}, my Japanese Name is: {interest.JapaneseName}, my Korean Name is: {interest.KoreanName}
          </div>
          <div>You can see me at months {interest.northernAvailability} at Northern, you can see me at months {interest.southernAvailability} at Southern</div>
          <div>I am a {interest.location} fish, I can be sold at ${interest.price}</div>
          <div>Villager caught me would likely to say: {interest.catchPharse}</div>
        </ul>
      </Popup>
    </div>
  )
}

export default Fish;