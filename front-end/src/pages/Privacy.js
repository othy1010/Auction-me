import React from 'react';
import NavBar from "../components/Admin/NavBar";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Admin/Footer";
import PrivacyPolicy from "../components/PrivacyPolicy";

const Privacy = () => {
    return (
        <>
            <NavBar />
            <br/>
            <PrivacyPolicy />
        </>
    );
};

export default Privacy;
