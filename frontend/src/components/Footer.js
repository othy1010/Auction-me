import React from 'react';
import logo from '../assets/logo.png'
import facebook from '../assets/facebook.png'
import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'
import gmail from '../assets/gmail.png'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className="footer">
        <table>
        <thead>
        <tr>
            <td></td>
            <td>Langues</td>
            <td>About</td>
            <td>Privacy Policy</td>
            <td>Contact</td>
            <td>Follow us</td>
        </tr>
        </thead>
  
      <tbody>
      <tr>
        <td className="thead" rowspan="3" style={{textAlign: "center"}}>
          <img src={logo} style={{width: "50px"}} />
  
        </td>
        <td>
          <a href="/">English</a>
        </td>
        <td>
          <a href="/">TorL</a>
        </td>
        <td>Our Privacy Policy</td>
        <td>torl.auction@gmail.com </td>
        <td>
          <a href="/">
            <img src={facebook} style={{width: "20px"}} alt="" />
          </a>
          <a href="/">
            <img src={twitter} style={{width: "21px"}} alt=''/>
          </a>
          <a href="#">
            <img src={insta} style={{width: "21px"}} alt='' />
          </a>
          <a href="/">
            <img src={gmail} style={{width: "31px"}} alt="" />
          </a>
          
        </td>
      </tr>
      <tr>
        <td>
          <a href="#">French</a>
        </td>
        <td>
          <a href="#">Ressources</a>
        </td>
        <td></td>
        <td>
          <a href="#">Contact us</a>
        </td>
      </tr>
      </tbody>
  
    </table>
  </div>
    );
};

export default Footer;