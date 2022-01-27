import React from 'react';
import NavUser from "../../components/User/NavUser"
import UserFooter from "../../components/User/UserFooter";
import Notification from "../../components/User/Notification";
import '../../styles/user_styles/user_notifications.scss';
import AuctionCard from "../../components/User/AuctionCard";

const Notifications = () => {
    return (
        <div>
            <NavUser />
            <br/> <br/>
            <div className="user_notifs">
            <table className="user_notif">
                <tr>
                        <td className="user_sep"><AuctionCard/></td>
                        <td className="user_sep">You lost the auction</td>
                </tr>
                <tr>
                    <td className="user_sep"><AuctionCard/></td>
                    <td className="user_sep">You won!</td>
                </tr>
                <tr>
                    <td className="user_sep"><AuctionCard/></td>
                    <td className="user_sep">Careful! Someone bid more than you!</td>
                </tr>
            </table>
            </div>
            <UserFooter />
        </div>
    );
};

export default Notifications;