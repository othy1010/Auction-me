import React, { Component } from "react";
import toast from "react-hot-toast";
import { withRouter } from "react-router-dom";
import UserInfos from "../config.js/UserInfos";
import UserService from "../services/UserService";

class GroupeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupes: [],
    };
    this.editGroupe = this.editGroupe.bind(this);
    this.deleteGroupe = this.deleteGroupe.bind(this);
    this.create = this.create.bind(this);
    this.planningOfGroupe = this.planningOfGroupe.bind(this);
  }

  componentDidMount() {
    UserService.getGroupes().then((response) => {
      this.setState({ groupes: response.data });
    });
  }

  editGroupe(idG) {
    this.props.history.push(`/addGroupe/${idG}`);
  }

  deleteGroupe(idG) {
    UserService.deleteGroupe(idG).then((resp) => {
      this.setState({
        groupes: this.state.groupes.filter((groupe) => groupe.idG !== idG),
      });
    });
    UserService.getUserByIdU(UserInfos.userInfos.idU).then((response2) => {
      UserInfos.userInfos = response2.data;
      localStorage.setItem("userInfos", JSON.stringify(UserInfos.userInfos));
    });
    console.log("Suppression avec succés");
    toast.success("Suppression avec succés");
  }

  create() {
    this.props.history.push("/addGroupe/-1");
  }

  UsersInGroupe(idG) {
    this.props.history.push(`/usersInGroupe/${idG}`);
  }

  planningOfGroupe(idG) {
    this.props.history.push(`/planning/${idG}`);
  }

  render() {
    return (
      <div className="container main-component">
        <h1 className="text-center">Liste de groupe</h1>
        <div className="col-4 offset-4 text-center">
          <button
            onClick={this.create}
            id="btn-create"
            className="btn btn-success mb-20"
          >
            Creer
          </button>
        </div>
        <table className="table table-striped text-center table-bordered ">
          <thead className="table-dark">
            <tr>
              <td>ID</td>
              <td>NOM</td>
              <td>Nombre d'utilisateurs</td>
            </tr>
          </thead>
          {this.state.groupes.map((groupe) => (
            <tbody className="table-light">
              <tr key={groupe.idG}>
                <td className="col-4">{groupe.idG}</td>
                <td>{groupe.groupeName}</td>
                <td>{groupe.numberOfU}</td>
              </tr>
              <div className="text-center width">
                <div className="item1">
                  <button
                    onClick={() => this.editGroupe(groupe.idG)}
                    className="btn btn-success "
                  >
                    Modifier
                  </button>
                </div>
                <div className="item2">
                  <button
                    onClick={() => this.deleteGroupe(groupe.idG)}
                    className="btn btn-danger"
                  >
                    Supprimer
                  </button>
                </div>
                <div className="item3">
                  <button
                    id="deconnect-btn"
                    onClick={() => this.UsersInGroupe(groupe.idG)}
                    className="btn btn-secondary "
                  >
                    Utilisateurs
                  </button>
                </div>
                <div className="item4">
                  <button
                    id="planning-btn"
                    onClick={() => this.planningOfGroupe(groupe.idG)}
                    className="btn btn-secondary"
                  >
                    Planning
                  </button>
                </div>
              </div>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

export default withRouter(GroupeComponent);
