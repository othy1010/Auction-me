import React from 'react';
import '../styles/Login.css'

const Login = () => {
    return (
        <div className="center">
            <h1>Login</h1>
            <form>
                <div className="txt_field">
                    <input type="email" placeholder='Email' required/>
                </div>
                <div className="txt_field">
                    <input type="password" placeholder='Password' required/>
                </div>
                <div className="pass">Forgot Password?</div>
                <input type="submit" value="Login" />
                <div className="signup_link">
                    Not a member? <a href="/">Signup</a>
                </div>
            </form>
        </div>
    );
};

export default Login;