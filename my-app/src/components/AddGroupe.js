import React, { Component } from "react";
import toast from "react-hot-toast";
import { withRouter } from "react-router-dom";
import UserInfos from "../config.js/UserInfos";
import UserService from "../services/UserService";

class AddGroupe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idG: this.props.match.params.idG,
      groupeName: "",
    };
    console.log(this.state.groupeName);
    this.changeGroupeNameHandler = this.changeGroupeNameHandler.bind(this);
    this.saveOrUpdateGroupe = this.saveOrUpdateGroupe.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    if (this.state.idG == -1) {
      console.log("ajouter");
      return;
    } else {
      UserService.getGroupeByIdG(this.state.idG).then((res) => {
        console.log(this.state.idG);
        let groupe = res.data;
        console.log(groupe);
        this.setState({
          groupeName: groupe.groupeName,
        });
      });
    }
  }

  saveOrUpdateGroupe = (e) => {
    var html = "<div class='alert alert-danger'>";
    e.preventDefault();
    let groupe = {
      groupeName: this.state.groupeName,
    };
    if (this.state.idG == -1) {
      UserService.getGroupeByGroupeName(this.state.groupeName).then(
        (response) => {
          if (response.data != "") {
            html += "<li>Ce nom existe deja</li>";
          }
          if (html == "<div class='alert alert-danger'>") {
            toast.success("Creation avec succés");
            UserService.createGroupe(groupe).then((res) => {
              this.props.history.push("/groupeComponent");
            });
          } else {
            html += "</div>";
            document.getElementById("errors").innerHTML = html;
            toast.error("ERREUR");
            window.scrollTo(0, 0);
          }
        }
      );
    } else {
      UserService.getGroupeByGroupeName(this.state.groupeName).then(
        (response) => {
          if (response.data != "" && this.state.idG != response.data.idG) {
            html += "<li>Ce nom existe deja</li>";
          }
          if (html == "<div class='alert alert-danger'>") {
            console.log("Modifier avec succés");
            UserService.updateGroupe(this.state.idG, groupe).then((res) => {
              UserService.getUserByIdU(UserInfos.userInfos.idU).then(
                (response2) => {
                  UserInfos.userInfos = response2.data;
                  localStorage.setItem(
                    "userInfos",
                    JSON.stringify(UserInfos.userInfos)
                  );
                }
              );
              toast.success("Modifier avec succés");
              this.props.history.push("/groupeComponent");
            });
          } else {
            html += "</div>";
            document.getElementById("errors").innerHTML = html;
            toast.error("ERREUR");
            window.scrollTo(0, 0);
          }
        }
      );
    }
  };

  getTitle() {
    if (this.state.idG == -1) {
      return <h3 className="text-center mt-10">Créer un groupe</h3>;
    } else {
      return <h3 className="text-center mt-10">Modifier un groupe</h3>;
    }
  }

  cancel = (e) => {
    e.preventDefault();
    this.props.history.push("/groupeComponent");
    console.log("Annuler");
  };

  changeGroupeNameHandler = (event) => {
    this.setState({ groupeName: event.target.value.toUpperCase() });
  };

  validateForm() {
    return this.state.groupeName.length > 0;
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3" id="card">
              {this.getTitle()}
              <div className="card-body">
                <div id="errors"></div>
                <form>
                  <div className="form-groupe mb-20">
                    <label>Nom du groupe :</label>
                    <input
                      name="groupeName"
                      className="form-control"
                      value={this.state.groupeName}
                      onChange={this.changeGroupeNameHandler}
                    />
                  </div>
                  <div className="row">
                    <button
                      className="btn btn-success col-4 offset-1 mt-10 "
                      onClick={this.saveOrUpdateGroupe}
                      disabled={!this.validateForm()}
                    >
                      Enregistrer
                    </button>
                    <button
                      className="btn btn-danger col-4 offset-2  mt-10 "
                      onClick={this.cancel}
                    >
                      Annuler
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddGroupe);
