import React from 'react';
import NavUser from "../../components/User/NavUser"
import UserFooter from "../../components/User/UserFooter"
import Header from "../../components/User/Header"
import MenuUser from "../../components/User/MenuUser";
import "../../styles/user_styles/style_Template.scss"

const HomeUser = () => {
       return (
           <div>
               <NavUser />
               <Header />
               <h1>Home page</h1>
               <MenuUser />
               Choose what you like
               <UserFooter />
           </div>
       );
};

export default HomeUser;
