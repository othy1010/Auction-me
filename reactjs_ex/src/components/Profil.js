import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserInfos from "../config.js/UserInfos";
import UserService from "../services/UserService";

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupeName: "",
    };
    if (UserInfos.userInfos.idG != null) {
      UserService.getGroupeByIdG(UserInfos.userInfos.idG).then((response) => {
        this.setState({ groupeName: response.data.groupeName });
      });
    }
    this.gender = this.gender.bind(this);
    this.editUser = this.editUser.bind(this);
  }

  gender(number) {
    if (number === 1) {
      return "masculin";
    } else {
      return "feminin";
    }
  }

  groupe(groupeName) {
    if (groupeName == "" || groupeName == undefined) {
      return "Pas de groupe";
    } else {
      return groupeName;
    }
  }

  editUser(idU) {
    this.props.history.push(`/addUser/${idU}`);
  }

  render() {
    return (
      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card" id="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                      <h4>
                        <span>{UserInfos.userInfos.firstName}</span>
                        <span> &nbsp;</span>
                        <span>{UserInfos.userInfos.secondName}</span>
                      </h4>
                      <p className="textSecondary font-size-sm">
                        <span>{UserInfos.userInfos.address}</span>
                        <span>&nbsp;,&nbsp;</span>
                        <span>{UserInfos.userInfos.city}</span>{" "}
                        <span>&nbsp;,&nbsp;</span>
                        <span>{UserInfos.userInfos.country}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="offset-4 mt-10">
                <button
                  onClick={() => this.editUser(UserInfos.userInfos.idU)}
                  className="btn btn-success "
                >
                  Modifier
                </button>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3" id="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6>Profile</h6>
                    </div>
                    <div className="col-sm-9 textSecondary">
                      {UserInfos.userInfos.profil}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6>Sexe</h6>
                    </div>
                    <div className="col-sm-9 textSecondary">
                      {this.gender(UserInfos.userInfos.sexe)}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6>Jour de naissance</h6>
                    </div>
                    <div className="col-sm-9 textSecondary">
                      {UserInfos.userInfos.birthday}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6>Lieu de naissance</h6>
                    </div>
                    <div className="col-sm-9 textSecondary">
                      {UserInfos.userInfos.birthplace}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6>Email</h6>
                    </div>
                    <div className="col-sm-9 textSecondary">
                      {UserInfos.userInfos.email}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6>CIN</h6>
                    </div>
                    <div className="col-sm-9 textSecondary">
                      {UserInfos.userInfos.cin}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6>Numero de telephone</h6>
                    </div>
                    <div className="col-sm-9 textSecondary">
                      {UserInfos.userInfos.phone}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6>Groupe</h6>
                    </div>
                    <div className="col-sm-9 textSecondary">
                      {this.groupe(this.state.groupeName)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Profil);
