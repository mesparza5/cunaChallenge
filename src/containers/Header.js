import React from 'react';
import '../css/header.css';
import logo from '../images/CM_Logo.png';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="CM Logo" className="logo"/>
      <h2>AutoLoan App Challenge</h2>
    </div>
  )
}

export default Header;