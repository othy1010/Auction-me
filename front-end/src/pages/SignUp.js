import UserFooter from "../components/User/UserFooter";
import React from "react";
import SignUpForm from "../components/SignUpForm";
import "../styles/user_styles/signup.scss"


function SignUp(){
    return (
        <div className="signUpForm">
            <SignUpForm />
            <UserFooter />
        </div>
    )
}

export default SignUp