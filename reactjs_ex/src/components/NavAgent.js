import React, { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import UserInfos from "../config.js/UserInfos";
import Profil from "./Profil";
import ReactDOM from "react-dom";
import App from "../App";
import MyPlanning from "./MyPlanning";
import Notifications from "./Notifications";

class NavAgent extends Component {
  deconnected() {
    localStorage.clear();
    console.log("deconnected");
    UserInfos.userInfos = [];
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById("root")
    );
  }

  render() {
    return (
      <Router>
        <div className="mb-40">
          <Navbar className="mb-20" bg="dark" variant="dark">
            <Container>
              <Nav.Item>
                <Link to="/profil"><i className="fa fa-user fa-sm mr-2 "></i>Profil</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/monPlanning"><i className="fa fa-clock fa-sm mr-2 "></i>Planning</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/notifications"><i className="fa fa-bell fa-sm mr-2 "></i>Notifications</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/login">
                  <button
                    id="deconnect-btn"
                    className="btn btn-secondary btn-sm btn-block"
                    onClick={this.deconnected}
                  >
                    Se deconnecter
                  </button>
                </Link>
              </Nav.Item>
            </Container>
          </Navbar>
          <Switch>
            <Route exact path="/">
              <Profil />
            </Route>
            <Route path="/profil">
              <Profil />
            </Route>
            <Route path="/monPlanning">
              <MyPlanning />
            </Route>
            <Route path="/notifications">
              <Notifications />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default NavAgent;
