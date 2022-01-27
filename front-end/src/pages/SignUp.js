import React from "react";
import SignUpForm from "../components/SignUpForm";
import "../styles/user_styles/signup.scss"


function SignUp(){
    return (
        <div className="user_signUpForm">
            <SignUpForm />
            <br/><br/>
        </div>
    )
}

export default SignUp