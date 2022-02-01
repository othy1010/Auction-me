import React from 'react';
import logo from '../../assets/logo.png'
import '../../styles/admin_styles/NavAdmin.css'
import {Link} from "react-router-dom";
import { NavLink } from "react-router-dom";

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
          <NavLink exact to="/AdminHome" style={({ isActive }) => ({ color: isActive ? '#000': '#fff', fontWeight: isActive ? 'bold': 'none'})}> Home</NavLink>
          <NavLink exact to="/admin-profil" style={({ isActive }) => ({ color: isActive ? '#000' : '#fff', fontWeight: isActive ? 'bold': 'none'})}>My profil</NavLink>
          <NavLink exact to="/admin-notifications" style={({ isActive }) => ({ color: isActive ? '#000' : '#fff', fontWeight: isActive ? 'bold': 'none'})}>Notification</NavLink>
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