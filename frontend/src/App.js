import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AdminHome from './pages/AdminHome';

function App() {

  return (
    <Router>
    {/*Ici on insère le composant navbar*/} 
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/AdminHome' element={<AdminHome />} />
    </Routes>
    </Router>

  );
}

export default App;
