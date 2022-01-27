import React from 'react';
import NavUser from "../../components/User/NavUser"
import UserFooter from "../../components/User/UserFooter"
import About from "../../components/About";

const UserAboutUs = () => {
    return (
        <div>
            <NavUser />
            <br/>
               <About />
            <UserFooter />
        </div>
    );
};

export default UserAboutUs;
