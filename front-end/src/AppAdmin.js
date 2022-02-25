import './App.css';
import { Router, Switch as Routes, Route} from 'react-router';
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
import AdminNotification from './pages/Admin/AdminNotification';

const AppAdmin = () => {
    return (
        <Routes>
                <Route exact path='/' ><Home /></Route>
            <Route exact path='/login' ><Login/></Route>
            <Route exact path="/sign-up"><SignUp/></Route>
            <Route path='/AdminHome/:type'><AdminHome /></Route>
            <Route exact path='/UsersList'><UsersList/></Route>
            <Route exact path='/user-info'><UserDetails/></Route>
            <Route exact path='/categories'><CategList /></Route>
            <Route exact path='/auctions'><AuctionsList /></Route>
            <Route exact path='/privacy'><Privacy/></Route>
            <Route exact path='/auction-details'><AuctionDetails /></Route>
            <Route exact path='/admin-profil'><AdminProfil /></Route>
            <Route exact path='admin-notifications'><AdminNotification/></Route>
            <Route path="*"><NotFoundAdmin/></Route>

        </Routes>
    );
};

export default AppAdmin;
