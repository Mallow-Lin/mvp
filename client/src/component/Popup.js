import React from 'react';

const Popup = (props) => {
  return (props.popup) ? (
    <div style={{backgroundColor: 'rgba(50,50,50,0.9)', display:'block', top:0, left:0, width:'100%', height:'100%', position:'fixed'}} onClick={() => props.showPopup(false)}>
      <div style={{backgroundColor: '#fff9e5', display:'inline-block', position: 'relative', top: '25%', width: '50%', height: '50%', 'border-radius': 40}}>
       {props.children}
      </div>
    </div>
  ) : '';
}

export default Popup;