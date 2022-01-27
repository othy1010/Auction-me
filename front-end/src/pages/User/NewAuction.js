import React from 'react';
import NavUser from "../../components/User/NavUser"
import UserFooter from "../../components/User/UserFooter";
import NewAuctionForm from "../../components/User/NewAuctionForm";

const NewAuction = () => {
    return (
        <div>
            <NavUser />
            <br/><br/>
            <NewAuctionForm/>
            <UserFooter />
        </div>
    );
};

export default NewAuction;
