import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import UserService from "../services/UserService";
import toast from "react-hot-toast";

class PasswordReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
  }

  sendRequest = (e) => {
    e.preventDefault();
    var html = "<div class='alert alert-danger'>";
    UserService.getUserByEmail(this.state.email).then((response) => {
      if (response.data == "") {
        html += "<li>Cet email n'existe pas</li>";
        html += "</div>";
        document.getElementById("errors").innerHTML = html;
        toast.error("ERREUR");
      } else {
        UserService.sendEmail(response.data).then((res) => {
          html =
            "<div class='Login col-4 offset-4'><h3>Un mail s'est envoyé à votre email</h3></div>";
          document.getElementById("component").innerHTML = html;
          toast.success("Email envoyé");
        });
      }
    });
  };
  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  validateForm() {
    return this.state.email.length > 0;
  }

  render() {
    return (
      <div id="component">
        <div className="Login col-4 offset-4">
          <h3 className="text-center">Mot de passe oublié</h3>
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
            <Button
              id="btn-login"
              block
              size="lg"
              onClick={this.sendRequest}
              disabled={!this.validateForm()}
            >
              Envoyer
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default PasswordReset;
