import React, { Component } from "react";
import toast from "react-hot-toast";
import { withRouter } from "react-router-dom";
import UserInfos from "../config.js/UserInfos";
import UserService from "../services/UserService";

class UsersInGroupe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idG: this.props.match.params.idG,
      users: [],
      groupeName: "",
      idU: "",
      usersNotInGroupe: [],
      groupeName2: [],
    };
    this.deleteUserFromGroupe = this.deleteUserFromGroupe.bind(this);
    this.addUserToGroupe = this.addUserToGroupe.bind(this);
    this.back = this.back.bind(this);
  }

  deleteUserFromGroupe(User) {
    console.log(this.state.idG, User);
    UserService.deleteUserFromGroupe(this.state.idG, User).then((resp) => {
      console.log(resp);
      this.componentDidMount();
      UserService.getUserByIdU(UserInfos.userInfos.idU).then((response2) => {
        UserInfos.userInfos = response2.data;
        localStorage.setItem("userInfos", JSON.stringify(UserInfos.userInfos));
      });
    });
    console.log("Suppression avec succés");
    toast.success("Retire avec succés");
  }

  addUserToGroupe(User) {
    UserService.addUserToGroupe(this.state.idG, User).then((resp) => {
      console.log(resp);
      this.componentDidMount();
      UserService.getUserByIdU(UserInfos.userInfos.idU).then((response2) => {
        UserInfos.userInfos = response2.data;
        localStorage.setItem("userInfos", JSON.stringify(UserInfos.userInfos));
      });
      toast.success("Ajout avec succés");
      window.scrollTo(0, 0);
    });
  }

  back() {
    this.props.history.push("/groupeComponent");
  }

  componentDidMount() {
    UserService.getGroupeByIdG(this.state.idG).then((response) => {
      this.setState({
        users: response.data.users,
        groupeName: response.data.groupeName,
      });
    });
    UserService.getUsersNotInGroupe(this.state.idG).then((response) => {
      var groupe = [];
      response.data.map((user) => {
          if (user.idG == null) {
            groupe.push({ idU: user.idU, name: "-" });
            this.setState({ groupeName2: groupe });
          } else {
            UserService.getGroupeByIdG(user.idG).then((resp) => {
              groupe.push({ idU: user.idU, name: resp.data.groupeName });
              this.setState({ groupeName2: groupe });
            });
          }
      });
      this.setState({
        usersNotInGroupe: response.data,
      });
    });
  }

  gender(number) {
    if (number === 1) {
      return "masculin";
    } else {
      return "feminin";
    }
  }

  defined(obj) {
    if (obj != undefined) {
      return obj.name;
    }
  }

  getTable(type) {
    if (type == 1) {
      return (
        <div className="main-component">
          <h1 className="text-center">
            Utilisateurs du groupe {this.state.groupeName}
          </h1>
          <table className="table table-striped text-center table-bordered table-active">
            <thead className="table-dark">
              <tr>
                <td>ID</td>
                <td>Prenom</td>
                <td>Nom</td>
                <td>Sexe</td>
                <td>Pays</td>
                <td>Ville</td>
                <td>Adresse</td>
                <td>Date de naissance</td>
                <td>Lieu de naissance</td>
                <td>CIN</td>
                <td>Num de telephone</td>
                <td>Email</td>
                <td>Profil</td>
                <td></td>
              </tr>
            </thead>
            {this.state.users.map((user) => (
              <tbody className="table-light">
                <tr key={user.idU}>
                  <td>{user.idU}</td>
                  <td>{user.firstName}</td>
                  <td>{user.secondName}</td>
                  <td>{this.gender(user.sexe)}</td>
                  <td>{user.country}</td>
                  <td>{user.city}</td>
                  <td>{user.address}</td>
                  <td>{user.birthday}</td>
                  <td>{user.birthplace}</td>
                  <td>{user.cin}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.profil}</td>
                  <td>
                    <button
                      onClick={() => this.deleteUserFromGroupe(user)}
                      className="btn btn-danger btn-sm"
                    >
                      Retirer
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      );
    } else {
      return (
        <div className="main-component">
          <h1 className="text-center">
            Ajouter des utilisateurs au groupe {this.state.groupeName}
          </h1>
          <table className="table table-striped text-center font-size table-bordered table-active">
            <thead className="table-dark">
              <tr>
                <td>ID</td>
                <td>Prenom</td>
                <td>Nom</td>
                <td>Sexe</td>
                <td>Pays</td>
                <td>Ville</td>
                <td>Adresse</td>
                <td>Date de naissance</td>
                <td>Lieu de naissance</td>
                <td>CIN</td>
                <td>Num de telephone</td>
                <td>Email</td>
                <td>Profil</td>
                <td>Groupe</td>
                <td></td>
              </tr>
            </thead>
            {this.state.usersNotInGroupe.map((user) => (
              <tbody className="table-light">
                <tr key={user.idU}>
                  <td>{user.idU}</td>
                  <td>{user.firstName}</td>
                  <td>{user.secondName}</td>
                  <td>{this.gender(user.sexe)}</td>
                  <td>{user.country}</td>
                  <td>{user.city}</td>
                  <td>{user.address}</td>
                  <td>{user.birthday}</td>
                  <td>{user.birthplace}</td>
                  <td>{user.cin}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.profil}</td>
                  <td>
                    {this.defined(
                      this.state.groupeName2.find(({ idU }) => idU == user.idU)
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => this.addUserToGroupe(user)}
                      id="btn-create"
                      className="btn btn-success btn-sm"
                    >
                      Ajouter
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="text-center">
        {this.getTable(1)}
        {this.getTable(0)}
        <button
          id="deconnect-btn"
          onClick={this.back}
          className="btn btn-secondary"
        >
          Retour
        </button>
      </div>
    );
  }
}
export default withRouter(UsersInGroupe);
