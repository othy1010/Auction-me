import React from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const NotFound = () => {
    return (
        <div>
            <Navigation />
            <h1> Erreur 404</h1>
            The page you are looking for does not exist.
            <Footer />
        </div>
    );
};

export default NotFound;