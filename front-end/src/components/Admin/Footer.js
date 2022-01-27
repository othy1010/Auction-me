import React from 'react';
import { NavLink } from "react-router-dom";
import "../../styles/user_styles/footer.scss"

const Footer = () => {
    // noinspection HtmlUnknownTarget
    return (
        <div className="user_footer">
            <table>
                <thead>
                <tr>
                    <td/>
                    <td>About</td>
                    <td>Privacy Policy</td>
                    <td>Contact</td>
                    <td>Follow us</td>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td id="logo" className="user_thead" rowSpan="3">
                        <img src="/images/logo.png" alt=""/>
                    </td>
                    <td>
                        <a href="#about">About us - TorL</a>
                    </td>
                    <td><NavLink exact to="/privacy">Our Privacy Policy</NavLink></td>
                    <td>torl.auction@gmail.com</td>
                    <td>
                        <a href="http://www.facebook.com">
                            <img id="facebook" src="/images/facebook.png" alt="facebook/torl"/>
                        </a>
                        <a href="http://www.twitter.com">
                            <img id="twitter" src="/images/twitter.png" alt="twitter/torl"/>
                        </a>
                        <a href="https://www.instagram.com/">
                            <img id="insta" src="/images/insta.png" alt="instagram/torl"/>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td/>
                    <td/>
                    <td>
                        <a href="#contact">Contact Us</a>
                    </td>
                    <td/>
                </tr>
                </tbody>

            </table>
        </div>
    );
};

export default Footer;
