import React from 'react';
import "../../styles/user_styles/user_AuctionForm.scss"
import ProfileCard from './ProfilItemCard';



export default class AuctionProfile extends React.Component {

    render() {
        return (
            <div className="user_auctionForm">
                <ProfileCard />
            </div>

        );
    }
}



