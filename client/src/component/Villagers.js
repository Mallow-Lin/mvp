import React, {useState, useEffect } from 'react';
import $ from 'jquery';
import Popup from './Popup.js';
// import style from  './style.css';

const Villagers = () => {
  const [villagers, setVillagers] = useState([]);
  const [popup, showPopup] = useState(false);
  const [interest, setInterest] = useState({});
  const [term, setTerm] = useState('');
  console.log('interest', interest)


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
      //   console.log('datadata', id)
      //   setInterest(data);
      //   if (!popup) {
      //     showPopup(true);
      //   }
      // },
      // error: (err) => {
      //   document.querySelector('.errorMessage').innerHTML="Sorry, we cannot find this villager, please try again";
      // }
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
    <div>
    <div style={{'textAlign': 'center'}}>
      <h1>Here's our Villagers</h1>
      <input onChange={(e) => {setTerm(e.target.value)}} /><button onClick={searchName}>Search</button>
      <p className='errorMessage' style={{color: 'red'}}></p>
      <main>
        <div>{villagers.map((villager) => {
          return (
            <button style={{width: 220, margin: 40}} onClick={() => {showPopup(true); searchVillager(villager.id)}}>
              <img src={villager.icon} />
              <div>{villager.EnglishName} / {villager.SpanishName} / {villager.ChineseName}</div>
              <div>{villager.JapaneseName} / {villager.KoreanName}</div>
            </button>
          )
        })}</div>
      </main>
    </div>
    <Popup popup={popup} showPopup={showPopup} villager={interest}></Popup>
    </div>

  )
}

export default Villagers;