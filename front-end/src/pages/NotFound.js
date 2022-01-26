import React from 'react';
import NavUser from "../components/User/NavUser";
import UserFooter from "../components/User/UserFooter";

const NotFound = () => {
    return (
        <div>
            <NavUser />
            <h1> Erreur 404</h1>
            The page you are looking for does not exist.
            <UserFooter />
        </div>
    );
};

export default NotFound;