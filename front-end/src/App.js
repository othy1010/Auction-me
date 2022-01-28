import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AppAdmin from "./AppAdmin";
import AppUser from "./AppUser";
import Home from "./pages/Home";


function App() {
    const admin = false;   //change to true to see admin side
    return (
        <Router>
            {/*Ici on insère le composant navbar*/}
            {
                (admin === true)? <AppAdmin /> : <AppUser />
            }

        </Router>

    );
}

export default App;

