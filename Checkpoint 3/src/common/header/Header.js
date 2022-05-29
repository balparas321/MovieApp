import React, { Component } from 'react';
import './Header.css';

class  Header extends Component() {
  render(){
  return (   
  <div className='header'>
    <img className= 'imgs' src='https://cdn.upgrad.com/uploads/production/286e1f11-1897-4d0c-ab0f-6b2bfc1ce642/logo.svg' alt='kk'></img>
 
  <span className='upcoming'>
    Upcoming Movies
  </span>
  </div>
  )
  }
}
export default Header;