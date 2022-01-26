import '../styles/navigation.scss';
import { NavLink } from "react-router-dom";

import React from 'react';

const NavUser = () => {
    return (
        <div className="top-nav">
        <div className="navigation">
            <NavLink id="logo" exact to="/">
                    TorL
            </NavLink>
            <NavLink exact to="/" activeClassName="nav-active">Home</NavLink>
            <NavLink exact to="/my-profil" activeClassName="nav-active">My Profil</NavLink>
            <NavLink exact to="/notifications" activeClassName="nav-active">Notifications</NavLink>
            <div className="search">
                <label htmlFor="search_bar"/>
                <input id="search_bar" type="text" placeholder="Search"/>
                <button>Search</button>
            </div>
        </div>
            <div className="account">
                <NavLink exact to="/login">
                    <button id="login">Log in</button>
                </NavLink>
                <NavLink exact to="/sign-up">
                    <button id="register">Register</button>
                </NavLink>
            </div>
        </div>
    );
};

export default NavUser;
