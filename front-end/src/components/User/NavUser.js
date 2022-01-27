import '../../styles/user_styles/navUser.scss';
import { NavLink } from "react-router-dom";

import React from 'react';

const NavUser = () => {
    return (
        <div className="user_top-nav">
        <div className="user_navigation">
            <NavLink id="logo" exact to="/home">
                    TorL
            </NavLink>
            <NavLink exact to="/home" activeClassName="nav-active">Home</NavLink>
            <NavLink exact to="/my-profil" activeClassName="nav-active">My Profil</NavLink>
            <NavLink exact to="/notifications" activeClassName="nav-active">Notifications</NavLink>
            <div className="user_search">
                <label htmlFor="search_bar"/>
                <input id="search_bar" type="text" placeholder="Search"/>
                <button>Search</button>
            </div>
        </div>
            <div className="user_account">
                <NavLink exact to="/">
                    <button id="logout">Log out</button>
                </NavLink>
            </div>
        </div>
    );
};

export default NavUser;
