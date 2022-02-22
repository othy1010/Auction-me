import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import UserInfos from "../config.js/UserInfos";
import UserService from "../services/UserService";
import ReactDOM from "react-dom";
import App from "../App";
import toast from "react-hot-toast";

class NewPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: this.props.match.params.token,
      password: "",
      confirmPassword: "",
    };
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeConfirmPasswordHandler =
      this.changeConfirmPasswordHandler.bind(this);
  }

  sendRequest = (e) => {
    e.preventDefault();
    var html = "<div class='alert alert-danger'>";
    console.log(this.state.token);
    UserService.getUserByToken(this.state.token).then((response) => {
      if (response.data == "") {
        html += "<li>Demande refusée, le lien est non acceptable</li>";
        html += "</div>";
        document.getElementById("errors").innerHTML = html;
        toast.error("ERREUR");
      } else {
        if (this.state.password != this.state.confirmPassword) {
          html += "<li>Les deux champs ne sont pas identiques</li>";
          html += "</div>";
          document.getElementById("errors").innerHTML = html;
        toast.error("ERREUR");

        } else {
          let user = {
            idU: response.data.idU,
            idG: response.data.idG,
            firstName: response.data.firstName,
            secondName: response.data.secondName,
            sexe: response.data.sexe,
            country: response.data.country,
            city: response.data.city,
            address: response.data.address,
            birthday: response.data.birthday,
            birthplace: response.data.birthplace,
            cin: response.data.cin,
            phone: response.data.phone,
            email: response.data.email,
            password: this.state.password,
            profil: response.data.profil,
          };
          console.log(user);
          UserService.updateUser(response.data.idU, user).then((res) => {
            console.log(res.data);

            UserInfos.userInfos = user;
            localStorage.setItem(
              "userInfos",
              JSON.stringify(UserInfos.userInfos)
            );
            toast.success("Changement de mot de passe avec succés");
            this.props.history.push("/profil");
            ReactDOM.render(
              <React.StrictMode>
                <App />
              </React.StrictMode>,
              document.getElementById("root")
            );
          });
        }
      }
    });
  };
  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  changeConfirmPasswordHandler = (event) => {
    this.setState({ confirmPassword: event.target.value });
  };

  validateForm() {
    return (
      this.state.password.length > 0 && this.state.confirmPassword.length > 0
    );
  }

  render() {
    return (
      <div>
        <div className="Login col-4 offset-4">
          <h3 className="text-center">Renitialisation du mot de passe</h3>
          <div id="errors"></div>
          <Form>
            <Form.Group size="lg">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.changePasswordHandler}
              />
            </Form.Group>
            <Form.Group size="lg">
              <Form.Label>Confirmer le mot de passe</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.changeConfirmPasswordHandler}
              />
            </Form.Group>
            <Button
              id="btn-login"
              block
              size="lg"
              onClick={this.sendRequest}
              disabled={!this.validateForm()}
            >
              Reinitialiser
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default withRouter(NewPassword);
