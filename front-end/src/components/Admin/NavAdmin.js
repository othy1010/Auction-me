import React from 'react';
import logo from '../../assets/logo.png'
import '../../styles/admin_styles/NavAdmin.css'
import {Link} from "react-router-dom";
import { NavLink } from "react-router-dom";
import UserInfo from "../../configs/UserInfo";
import ReactDOM from "react-dom";
import App from "../../App";
import {BrowserRouter as Router, Route} from "react-router-dom";


const NavAdmin = () => {
    function deconnect() {
        localStorage.clear();
        console.log("deconnected");
        UserInfo.userInfos = [];
        ReactDOM.render(
            <React.StrictMode>
                <App/>
            </React.StrictMode>,
            document.getElementById("root")
        );
    };
    return (
        <Router>
            <Route>
        <div className='navadmin'>
            <a id="logo" href="/AdminHome">
                <div className="logo">
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
              <NavLink to="/login">
                  <button id="logout" onClick={deconnect}>Log out</button>
              </NavLink>
          </div>
        </div>

            </Route>
        </Router>
    );
};

export default NavAdmin;
