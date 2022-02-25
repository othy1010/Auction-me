import './App.css';
import { BrowserRouter as Router, Switch as Routes, Route } from 'react-router-dom';

import NotFoundUser from './pages/User/NotFoundUser';
import HomeUser from './pages/User/HomeUser';
import AuctionInfo from './pages/User/AuctionInfo';
import MyProfil from "./pages/User/MyProfil";
import Results from "./pages/User/Results";
import Notifications from "./pages/User/Notifications";
import NewAuction from "./pages/User/NewAuction";
import UserPricavyPolicy from "./pages/Footer/UserPricavyPolicy";
import UserAboutUs from "./pages/Footer/UserAboutUs";
import UserContactUs from "./pages/Footer/UserContactUs";

import React from 'react';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import ResultsByCategory from './pages/User/ResultsByCategory';




const AppUser = () => {
    return (
        <Routes>
            <Route exact path='/login'>
                <Login />
            </Route>
            <Route exact path="/sign-up">
                <SignUp />
            </Route>
            <Route exact path='/' >
                <Home />
            </Route>
            <Route exact path='/privacy'>
                <Privacy />
            </Route>


            <Route exact path="/home">
                <HomeUser />
            </Route>
            <Route exact path="/my-profil" >
                <MyProfil />
            </Route>
            <Route exact path="/notifications">
                <Notifications />
            </Route>
            <Route path="/all-auctions" >
                <Results />
            </Route>
            <Route path="/search/*" >
                <Results />
            </Route>
            <Route exact path="/all-ended-auctions" >
                <Results />
            </Route>
            <Route exact path="/auction-info" >
                <AuctionInfo />
            </Route>
            <Route exact path="/new-auction" >
                <NewAuction />
            </Route>
            <Route path="/auctions/:categoryName">
                <ResultsByCategory />
            </Route>
            <Route exact path="/privacy-policy">
                <UserPricavyPolicy />
            </Route>
            <Route exact path="/about-us">
                <UserAboutUs />
            </Route>
            <Route exact path="/contact-us" >
                <UserContactUs />
            </Route>
            <Route path="*">
                <NotFoundUser />
            </Route>
        </Routes>

    );
};

export default AppUser;
