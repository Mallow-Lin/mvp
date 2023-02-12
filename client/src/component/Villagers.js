import React, {useState, useEffect } from 'react';
import $ from 'jquery';
import Popup from './Popup.js';
// import style from  './style.css';

const Villagers = () => {
  const [villagers, setVillagers] = useState([]);
  const [popup, showPopup] = useState(false);
  const [interest, setInterest] = useState({});
  const [term, setTerm] = useState('');

  const fetchVillagers = () => {
    $.ajax({
      url: 'http://localhost:5000/Villagers',
      type: 'POST',
      success: () => {
        $.ajax({
          url: 'http://localhost:5000/Villagers',
          type: 'GET',
          success: (data) => {
            setVillagers(data);
          }
        })
      }
    })
  }

  useEffect(() => {
    fetchVillagers()
  }, [])


  const searchVillager = (id) => {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:5000/Villagers/get',
      data: {id},
      success: () => {
        innerGetRequest(id);
      }
    })
  }

  const searchName = () => {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:5000/Villagers/get',
      data: {term},
      success: (id) => {
        innerGetRequest(id);
        showPopup(true);
      },
      error: (err) => {
        document.querySelector('.errorMessage').innerHTML="Sorry, we cannot find this villager, please try again";
      }
    })
  }
  const innerGetRequest = (id) => {
    $.ajax({
      url: 'http://localhost:5000/Villagers/getInterest',
      type: 'GET',
      data: {id},
      success: (data) => {
        setInterest(data);
      }
    })
  }

  return (
    <div style={{'textAlign': 'center', backgroundImage: "url(" + "https://images5.alphacoders.com/956/956578.jpg" + ")", width: '100vw', height: '100vh', 'overflow-y': 'scroll'}}>
      <div style={{position: 'fixed', marginTop:60, marginLeft: '45%'}}>
        <h1 style={{fontSize: 30, color: '#fcea64'}}>Here's our Villagers</h1>
        <input onChange={(e) => {setTerm(e.target.value)}} /><button onClick={searchName}>Search</button>
        <p className='errorMessage' style={{color: 'red'}}></p>
      </div>
      <main style={{marginTop: 150}}>
        <div>{villagers.map((villager) => {
          return (
            <button style={{width:300, margin: 40, 'border-radius': 40}} onClick={() => {showPopup(true); searchVillager(villager.id)}}>
              <img src={villager.icon} />
              <div>{villager.EnglishName} / {villager.SpanishName} / {villager.ChineseName}</div>
              <div>{villager.JapaneseName} / {villager.KoreanName}</div>
            </button>
          )
        })}</div>
      </main>

      <Popup popup={popup} showPopup={showPopup}>
        <img src={interest.image} style={{marginTop: 20}}/>
        <div style={{marginTop: 30, color: '#786951', fontSize: 20}}>Hello everyone! My English name is: {interest.EnglishName}, my Spainish name is: {interest.SpanishName}, my Chinese name is: {interest.ChineseName}, my Japanese name is: {interest.JapaneseName}, my Korean name is: {interest.KoreanName}</div>
        <div style={{marginTop: 30, fontSize: 20, color:'#017c74'}}>
          <div>I am very {interest.Personality}, my hobby is {interest.Hobby}</div>
          <div>My birthday is {interest.Birthday}, I am a/an {interest.Species}</div>
          <div>I like to say "{interest.CatchPhrase}"</div>
        </div>
      </Popup>
    </div>
  )
}

export default Villagers;