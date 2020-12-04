import React from 'react';
import '../css/button.css';

const Button = (props) => {
  return (
    <>
      <button 
        className={`btn ${props.buttonStyle ? props.buttonStyle : 'default'}`}
        onClick={props.onClickEvent}
      >
        {props.label}
      </button>
    </>
  )
}

export default Button;