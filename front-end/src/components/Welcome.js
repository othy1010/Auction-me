import React from 'react';
import '../styles/Welcome.css'
import bid from "../assets/Bid.jpg"
import {Link} from "react-router-dom";

const Welcome = () => {
    return (
        <div className="welcome">
        <div className="left">
          welcome to <spam class="TL">T</spam><spam className="or">or</spam><spam className="TL">L</spam>
          <div className="down">Looking to Buy or Sell at Auction? You Are at the Right Place!<br/> Register Now for Free</div> 
          <div className="account">
              <Link to="/sign-up">
                  <button id="signUp2">Sign up</button>
              </Link>
          </div> 
        </div>
        
        <div className="right">
          <img src={bid}  style={{width: "580px" , height: "480px"}} alt='bid' />
        </div>
  </div>
    );
};

export default Welcome;