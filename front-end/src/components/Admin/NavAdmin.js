import React from 'react';
import logo from '../../assets/logo.png'
import '../../styles/admin_styles/NavAdmin.css'
import {Link} from "react-router-dom";

const NavAdmin = () => {
    return (
        <div className='navadmin'>
            <a id="logo" href="/AdminHome">
                <div class="logo">
                    <img src={logo} alt='logo'/>
                    TorL
                </div>
            </a>
        
        <div className="bar">
          <a href="/AdminHome">Home</a>
          <a href="/admin-profil">My profil</a>
          <a href="/">Notification</a>
        </div>
        
          <div className="logout">
              <Link to="/login" >
                  <button id="logout">Log out</button>
              </Link>

          </div>
        </div>
    );
};

export default NavAdmin;