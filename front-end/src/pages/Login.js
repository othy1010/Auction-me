import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Container} from "@material-ui/core";

import '../styles/admin_styles/Login.css'
import {Link} from "react-router-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";

import {Component} from "react";
import toast from "react-hot-toast";
import ReactDOM from "react-dom";
import UserService from "../Service/UserService";
import "../configs/UserInfo";
import UserInfo from "../configs/UserInfo";
import AdminHome from "./Admin/AdminHome";
import HomeUser from "./User/HomeUser";



// eslint-disable-next-line no-undef
/*
function loginParam(props){
    const {newUser} = useParams();
    const {stateParams} = useLocation().state;
    console.log("stateParams : "+ stateParams)
}    */
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
    }
    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    };

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    };
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    };
    connect = (e) => {
        e.preventDefault();
        var html = "<div class='alert alert-danger'>";
        // eslint-disable-next-line no-undef
        UserService.findByEmail(this.state.email).then((response) => {
            if (response.data == "") {
                html += "<div>Cet email n'existe pas</div>";
                html += "</div>";
                document.getElementById("errorsLogin").innerHTML = html;
                toast.error("ERREUR");
            }
            else {
                if (response.data.password != this.state.password) {
                    html += "<div>Fausse combinaison</div>";
                    html += "</div>";
                    document.getElementById("errorsLogin").innerHTML = html;
                    toast.error("ERREUR");

                } else {
                    // eslint-disable-next-line no-undef
                    UserInfo.userInfos = response.data;
                    localStorage.setItem(
                        "userInfos",
                        // eslint-disable-next-line no-undef
                        JSON.stringify(UserInfo.userInfos)
                    );
                    if(response.data.isAdmin){
                        //this.props.history.push("/admin-profil");
                        toast.success("Connection avec succés");
                        ReactDOM.render(
                            <React.StrictMode>
                                <Router>
                                    <Route>
                                        <AdminHome />
                                    </Route>
                                </Router>
                            </React.StrictMode>,
                            document.getElementById("root")
                        );
                    }
                    else {
                        this.props.history.push("/my-profil")
                        toast.success("Connection avec succés");
                        ReactDOM.render(
                            <React.StrictMode>
                            <Router>
                                <Route>
                                    <HomeUser />
                                </Route>
                            </Router>
                        </React.StrictMode>,
                            document.getElementById("root")
                        );
                    }
                }
            }
        });
    };



    render() {


        return (

            <Container>
            <div className="center">
                <h1>Login</h1>
                <Form>
                    <div className="txt_field">
                        <input name="field" type="email" placeholder='Email' required
                               value={this.state.email}
                               onChange={this.changeEmailHandler}/>
                    </div>
                    <div className="txt_field">
                        <input type="password" placeholder='Password' required
                               value={this.state.password} name="field"
                               onChange={this.changePasswordHandler}/>
                    </div>
                    <div className="pass">Forgot Password?</div>
                    <Button id="submit"
                            size="lg"
                            onClick={this.connect}
                            disabled={!this.validateForm()}>Login</Button>
                    <div className="signup_link">
                        Not a member? <Link to="/sign-up">Signup</Link>
                    </div>
                </Form>
                <div id="errorsLogin"></div>
            </div>
            </Container>
        );
    }
};

export default Login;
