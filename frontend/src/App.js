import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AdminHome from './pages/AdminHome';
import UsersList from './pages/UsersList';

import HomeUser from './pages/User/HomeUser';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import AuctionInfo from './pages/User/AuctionInfo';
import MyProfil from "./pages/User/MyProfil";
import Results from "./pages/User/Results";
import Notifications from "./pages/User/Notifications";
import NewAuction from "./pages/User/NewAuction";
import PricavyPolicy from "./pages/Footer/PricavyPolicy";


function App() {

  return (
    <Router>
    {/*Ici on insère le composant navbar*/} 
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/AdminHome' element={<AdminHome />} />
        <Route exact path='/UsersList' element={<UsersList/>} />
        
          /*Pages User can access) */
        <Route exact path="/sign-up" element={<SignUp/>} />

        <Route exact path="/" element={<HomeUser/>} />
        <Route exact path="/my-profil" element={<MyProfil/>} />
        <Route exact path="/notifications" element={<Notifications/>} />
        <Route path="/all-auctions" element={<Results/>} />
        <Route path="/search/*" element={<Results/>} />
        <Route exact path="/all-ended-auctions" element={<Results/>} />
        <Route exact path="/auction-info" element={<AuctionInfo/>} />
        <Route exact path="/new-auction" element={<NewAuction/>} />

        <Route exact path="/privacy-policy" element={<PricavyPolicy />}/>
        <Route path="*" element={<NotFound/>} />
    </Routes>
    </Router>

  );
}

export default App;

