import React from 'react';
import NavUser from "../../components/User/NavUser"
import UserFooter from "../../components/User/UserFooter"
import Contact from "../../components/Contact";

const UserContactUs = () => {
    return (
        <div>
            <NavUser />
            <Contact />
            <UserFooter />
        </div>
    );
};

export default UserContactUs;