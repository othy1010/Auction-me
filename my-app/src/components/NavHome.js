import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import NewPassword from "./NewPassword";
import PasswordReset from "./PasswordReset";

class NavHome extends Component {
  render() {
    return (
      <Router>
        <div className="mb-40">
          <Navbar className="mb-20" bg="dark" variant="dark">
            <Container>
              <Nav.Item className="col-6 text-center">
                <Link to="/login">Se connecter</Link>
              </Nav.Item>
              <Nav.Item className="col-6 text-center">
                <Link to="/reset">Mot de passe oublié</Link>
              </Nav.Item>
            </Container>
          </Navbar>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/reset">
              <PasswordReset />
            </Route>
            <Route path="/resetPassword/:token">
              <NewPassword />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default NavHome;
