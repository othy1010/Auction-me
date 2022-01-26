import React from 'react';
import { NavLink } from "react-router-dom";
import "../../styles/user_styles/menuUser.scss"

const MenuUser = () => {
    return (
        <div className="user_menu">
            <NavLink exact to="/new-auction">
                <button id="user_new_auction">Create an auction</button>
            </NavLink>
            <NavLink exact to="/all-auctions">
                <button>View all active auctions</button>
            </NavLink>
            <NavLink exact to="/all-ended-auctions">
                <button>View recently ended auctions</button>
            </NavLink>
        </div>
    );
};

export default MenuUser;