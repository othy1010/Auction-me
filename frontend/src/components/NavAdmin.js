import React from 'react';
import logo from '../assets/logo.png'
import '../styles/NavAdmin.css'

const NavAdmin = () => {
    return (
        <div className='navadmin'>
            <a id="logo" href="/">
                <div class="logo">
                    <img src={logo} alt='logo'/>
                    TorL
                </div>
            </a>
        
        <div className="bar">
          <a href="/AdminHome">Home</a>
          <a href="/">My profil</a>
          <a href="/">Notification</a>
        </div>
        
          <div className="logout">
            <button id="logout">Log out</button>
          </div>
        </div>
    );
};

export default NavAdmin;