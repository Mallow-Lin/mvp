import React from 'react';

const Popup = (props) => {
  console.log(props.villager)
  return (props.popup) ? (
    <div style={{backgroundColor: 'rgba(50,50,50,0.9)', display:'block', top:0, left:0, width:'100%', height:'100%', position:'fixed'}} onClick={() => props.showPopup(false)}>
      <div style={{backgroundColor: 'pink', display:'inline-block', left:'25%', top:'25%', position: 'relative', width: '50%', height: '50%'}}>
        <img src={props.villager.image} />
        <ul>
          <li>My English Name is: {props.villager.EnglishName}</li>
          <li>My Spainish Name is: {props.villager.SpanishName}</li>
          <li>My Chinese Name is: {props.villager.ChineseName}</li>
          <li>My Japanese Name is: {props.villager.JapaneseName}</li>
          <li>My Korean Name is: {props.villager.KoreanName}</li>
          <li>Personality: {props.villager.Personality}</li>
          <li>Birthday: {props.villager.Birthday}</li>
          <li>Species: {props.villager.Species}</li>
          <li>Gender: {props.villager.Gender}</li>
          <li>Hobby: {props.villager.Hobby}</li>
          <li>Catch phrase: {props.villager.CatchPhrase}</li>
        </ul>
      </div>
    </div>
  ) : '';
}

export default Popup;