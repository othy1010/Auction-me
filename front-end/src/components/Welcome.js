import React from 'react';
import '../styles/Welcome.css'
import bid from "../assets/Bid.jpg"
import {Link} from "react-router-dom";

const Welcome = () => {
    return (
        <div className="welcome">
        <div className="left">
          welcome to <spam class="TL">T</spam><spam className="or">or</spam><spam className="TL">L</spam>
          <div className="down">Looking to Buy Or Sell at auction? you are at the right place!<br/> Register now for free</div> 
          <div className="account">
              <Link to="/sign-up">
                  <button id="signUp2">Sign up</button>
              </Link>
          </div> 
        </div>
        
        <div className="right">
          <img src={bid}  style={{width: "630px" , height: "530px"}} alt='bid' />
        </div>
  </div>
    );
};

export default Welcome;