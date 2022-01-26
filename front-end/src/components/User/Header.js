import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="left">
                <spam classname="TL">T</spam>
                ake it
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <spam classname="or">or</spam>
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;
                <spam classname="TL">L</spam>
                eave it
            </div>
            <div className="right">
                <img src="/images/bid.jpeg" style={{width: '550px', height: '460px'}}/>
            </div>
        </div>
    );
};

export default Header;