import React from 'react';
import NavUser from "../../components/User/NavUser"
import MenuUser from "../../components/User/MenuUser";
import UserFooter from "../../components/User/UserFooter";

const Results = () => {
    //contain category fiilter + display result
    return (
        <div>
            <NavUser />
            search and filter researcg
            <MenuUser />
            Choose what you like
            <UserFooter />
        </div>
    );
};

export default Results;