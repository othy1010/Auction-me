import React from 'react';
import NavUser from "../../components/User/NavUser"
import MenuUser from "../../components/User/MenuUser";
import UserFooter from "../../components/User/UserFooter";
import AuctionProfile from "../../components/User/AuctionProfile";

export default class AuctionInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: ""
        }
        // console.log(this.props.location.state);
        // console.log(props);
    }
    render() {
        return (
            <div>
                <NavUser />
                <MenuUser />
                <br />
                <AuctionProfile />
                <UserFooter />
            </div>
        );
    }

};

