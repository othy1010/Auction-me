import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

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

const AppUser = () => {
    return (
        <Routes>
            <Route exact path='/login' element={<Login/>} />
            <Route exact path="/sign-up" element={<SignUp/>} />
                <Route exact path='/' element={<Home />} />

                <Route exact path="/home" element={<HomeUser/>} />
            <Route exact path="/my-profil" element={<MyProfil/>} />
            <Route exact path="/notifications" element={<Notifications/>} />
            <Route path="/all-auctions" element={<Results/>} />
            <Route path="/search/*" element={<Results/>} />
            <Route exact path="/all-ended-auctions" element={<Results/>} />
            <Route exact path="/auction-info" element={<AuctionInfo/>} />
            <Route exact path="/new-auction" element={<NewAuction/>} />

            <Route exact path="/privacy-policy" element={<UserPricavyPolicy />}/>
            <Route exact path="/about-us" element={<UserAboutUs />}/>
            <Route exact path="/contact-us" element={<UserContactUs />}/>
            <Route path="*" element={<NotFoundUser/>} />
        </Routes>
    );
};

export default AppUser;