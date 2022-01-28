import React from 'react';
import NavUser from "../../components/User/NavUser"
import MenuUser from "../../components/User/MenuUser";
import UserFooter from "../../components/User/UserFooter";
import AuctionProfile from "../../components/User/AuctionProfile";

const AuctionInfo = () => {
    return (
        <div>
            <NavUser />
            <MenuUser />
            <br/>
            <AuctionProfile/>
            <UserFooter />
        </div>
    );
};

export default AuctionInfo;