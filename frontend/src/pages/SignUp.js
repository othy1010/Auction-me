import Footer from "../components/Footer";
import React from "react";
import SignUpForm from "../components/SignUpForm";

function SignUp(){
    return (
        <div className="signUpForm">
            <SignUpForm />
            <Footer />
        </div>
    )
}

export default SignUp