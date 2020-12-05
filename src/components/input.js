import React from 'react';
import '../css/inputFields.css';

const Input = (props) => {
  return (
    <div className="input-container">
      <label className="input-label">{props.label}</label>
      <input 
        className="input-field" 
        type={props.type === 'text' || props.type === 'number' ? props.type : 'text'}
        onChange={props.handleInputValue}
        value={props.value ? props.value : ''}
      />
    </div>
  )
}

export default Input