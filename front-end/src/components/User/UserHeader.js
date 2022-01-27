import React from 'react';
import "../../styles/user_styles/userHeader.scss"

const UserHeader = () => {
    return (
        <div className="user_header">
            <div className="user_left">
                <spam className="user_TL">T</spam>
                ake it
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <spam className="user_or">or</spam>
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;
                <spam className="user_TL">L</spam>
                eave it
            </div>
            <div className="user_right">
                <img src="/images/bid.jpeg" style={{width: '550px', height: '460px'}}/>
            </div>
        </div>
    );
};

export default UserHeader;
