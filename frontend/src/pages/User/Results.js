import React from 'react';
import Navigation from "../../components/Navigation"
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

const Results = () => {
    //contain category fiilter + display result
    return (
        <div>
            <Navigation />
            search and filter researcg
            <Menu />
            Choose what you like
            <Footer />
        </div>
    );
};

export default Results;