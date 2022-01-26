import React from 'react';
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Menu from "../../components/Menu";

const HomeUser = () => {
       return (
           <div>
               <Navigation />
               <Header />
               <h1>Home page</h1>
               <Menu />
               Choose what you like
               <Footer />
           </div>
       );
};

export default HomeUser;
