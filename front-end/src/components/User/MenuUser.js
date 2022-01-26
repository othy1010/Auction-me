import React from 'react';
import { NavLink } from "react-router-dom";

const MenuUser = () => {
    return (
        <div className="menu">
            <NavLink exact to="/new-auction">
                <button id="new_auction">Create an auction</button>
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