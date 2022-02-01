import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AdminHome from './pages/Admin/AdminHome';
import UsersList from './pages/Admin/UsersList';

import React from 'react';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotFoundAdmin from "./pages/Admin/NotFoundAdmin";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import UserDetails from './pages/Admin/UserDetails';
import CategList from './pages/Admin/CategList';
import AuctionsList from './pages/Admin/AuctionsList';
import AuctionDetails from './pages/Admin/AuctionDetails';
import AdminProfil from './pages/Admin/AdminProfil';

const AppAdmin = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login/>} />
            <Route exact path="/sign-up" element={<SignUp/>} />
            <Route exact path='/AdminHome' element={<AdminHome />} />
            <Route exact path='/UsersList' element={<UsersList/>} />
            <Route exact path='/user-info' element={<UserDetails/>} />
            <Route exact path='/categories' element={<CategList />} />
            <Route exact path='/auctions' element={<AuctionsList />} />
            <Route exact path='/privacy' element={<Privacy/>} />
            <Route exact path='/auction-details' element={<AuctionDetails />} />
            <Route exact path='/admin-profil' element={<AdminProfil />} />
            <Route path="*" element={<NotFoundAdmin/>} />

        </Routes>
    );
};

export default AppAdmin;


