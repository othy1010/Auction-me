import React from 'react';
import NavUser from "../../components/User/NavUser"
import UserFooter from "../../components/User/UserFooter"
import PrivacyPolicy from "../../components/PrivacyPolicy";

const UserPricavyPolicy = () => {
    return (
        <div>
            <NavUser />
            <PrivacyPolicy />
            <UserFooter />
        </div>
    );
};

export default UserPricavyPolicy;