import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import UserService from "../services/UserService";
import { Link, withRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import UserInfos from "../config.js/UserInfos";
import App from "../App";
import toast from "react-hot-toast";

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

  connect = (e) => {
    e.preventDefault();
    var html = "<div class='alert alert-danger'>";
    UserService.getUserByEmail(this.state.email).then((response) => {
      if (response.data == "") {
        html += "<li>Cet email n'existe pas</li>";
        html += "</div>";
        document.getElementById("errors").innerHTML = html;
        toast.error("ERREUR");
      } else {
        if (response.data.password != this.state.password) {
          html += "<li>Fausse combinaison</li>";
          html += "</div>";
          document.getElementById("errors").innerHTML = html;
        toast.error("ERREUR");

        } else {
          UserInfos.userInfos = response.data;
          localStorage.setItem(
            "userInfos",
            JSON.stringify(UserInfos.userInfos)
          );
          this.props.history.push("/profil");
          toast.success("Connection avec succés");
          ReactDOM.render(
            <React.StrictMode>
              <App />
            </React.StrictMode>,
            document.getElementById("root")
          );
        }
      }
    });
  };
  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  render() {
    return (
      <div className="Login col-4 offset-4">
        <h3 className="text-center">Se connecter</h3>
        <div id="errors"></div>
        <Form>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.changeEmailHandler}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label className="margin-10">Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.changePasswordHandler}
            />
          </Form.Group>
          <Button
            id="btn-login"
            block
            size="lg"
            onClick={this.connect}
            disabled={!this.validateForm()}
          >
          Connecter
          </Button>
        </Form>
        <div className="text-center">
          <Link className="no-decoration " to="/reset">
            Mot de passe oublié ?
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
