import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {

  return (
    <Router>
    {/*Ici on insère le composant navbar*/} 
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login/>} />
    </Routes>
    </Router>

  );
}

export default App;
