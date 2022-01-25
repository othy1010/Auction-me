import React from 'react';
import '../styles/NavBar.css'
import logo from '../assets/logo.png'

const NavBar = () => {
    return (
        <div className='navbar'>
            <a id="logo" href="/">
                <div class="logo">
                    <img src={logo} alt='logo'/>
                    TorL
                </div>
            </a>
        
        <div className="bar">
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="./login">Log in</a>
        </div>
        
          <div className="account">
            <button id="signUp">Sign up</button>
          </div>
        </div>
    );
};

export default NavBar;