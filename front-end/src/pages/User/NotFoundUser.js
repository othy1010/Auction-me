import React from 'react';
import NavUser from "../../components/User/NavUser";
import UserFooter from "../../components/User/UserFooter";
import NotFound from "../../components/NotFound";

const NotFoundUser = () => {
    return (
        <div>
            <NavUser />
            <NotFound />
            <UserFooter />
        </div>
    );
};

export default NotFoundUser;