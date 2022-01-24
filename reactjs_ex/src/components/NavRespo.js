import React, { Component } from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import UserInfos from "../config.js/UserInfos";
import AddUser from "./AddUser";
import Planning from "./Planning";
import Profil from "./Profil";
import ReactDOM from "react-dom";
import App from "../App";
import GroupeComponent from "./GroupeComponent";
import AddGroupe from "./AddGroupe";
import UsersInGroupe from "./UsersInGroupe";
import MyPlanning from "./MyPlanning";
import Notifications from "./Notifications";

class NavRespo extends Component {
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
                <Link to="/profil"> <i className="fa fa-user fa-sm mr-2 "></i>Profil</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/groupeComponent"><i className="fa fa-address-book fa-sm mr-2 "></i>Groupes</Link>
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
            <Route path="/addUser/:idU">
              <AddUser />
            </Route>
            <Route path="/addGroupe/:idG">
              <AddGroupe />
            </Route>
            <Route path="/groupeComponent">
              <GroupeComponent />
            </Route>
            <Route path="/usersInGroupe/:idG">
              <UsersInGroupe />
            </Route>
            <Route path="/planning/:idG">
              <Planning />
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

export default NavRespo;
