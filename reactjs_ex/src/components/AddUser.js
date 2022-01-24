import React, { Component } from "react";
import toast, { Toaster } from "react-hot-toast";
import { withRouter } from "react-router-dom";
import UserInfos from "../config.js/UserInfos";
import UserService from "../services/UserService";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idU: this.props.match.params.idU,
      firstName: "",
      secondName: "",
      sexe: "",
      country: "",
      city: "",
      address: "",
      birthday: "",
      birthplace: "",
      cin: "",
      phone: "",
      email: "",
      password: "",
      profil: "",
    };
    console.log(UserInfos.id);
    console.log(this.state.idU);
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeSecondNameHandler = this.changeSecondNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeCINHandler = this.changeCINHandler.bind(this);
    this.changeSexeHandler = this.changeSexeHandler.bind(this);
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.changeCityHandler = this.changeCityHandler.bind(this);
    this.changeCountryHandler = this.changeCountryHandler.bind(this);
    this.changeBirthdayHandler = this.changeBirthdayHandler.bind(this);
    this.changeBirthplaceHandler = this.changeBirthplaceHandler.bind(this);
    this.changePhoneHandler = this.changePhoneHandler.bind(this);
    this.changeProfilHandler = this.changeProfilHandler.bind(this);
    this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    this.cancel = this.cancel.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  componentDidMount() {
    if (this.state.idU == -1) {
      console.log("ajouter");
      return;
    } else {
      UserService.getUserByIdU(this.state.idU).then((res) => {
        let user = res.data;
        this.setState({
          firstName: user.firstName,
          secondName: user.secondName,
          sexe: user.sexe,
          country: user.country,
          city: user.city,
          address: user.address,
          birthday: user.birthday,
          birthplace: user.birthplace,
          cin: user.cin,
          phone: user.phone,
          email: user.email,
          password: user.password,
          profil: user.profil,
        });
      });
    }
  }

   saveOrUpdateUser = (e) => {
    var html = "<div class='alert alert-danger'>";
    e.preventDefault();
    let user = {
      firstName: this.state.firstName,
      secondName: this.state.secondName,
      sexe: this.state.sexe,
      country: this.state.country,
      city: this.state.city,
      address: this.state.address,
      birthday: this.state.birthday,
      birthplace: this.state.birthplace,
      cin: this.state.cin,
      phone: this.state.phone,
      email: this.state.email,
      password: this.state.password,
      profil: this.state.profil,
    };
    console.log(JSON.stringify(user));
    if (this.state.idU == -1) {
      UserService.getUserByEmail(this.state.email).then((response) => {
        if (response.data != "") {
          html += "<li>Cet email existe deja</li>";
        }
        UserService.getUserByCin(this.state.cin).then((response) => {
          if (response.data != "") {
            html += "<li>Ce numero du cin existe deja</li>";
          }
          if (html == "<div class='alert alert-danger'>") {
            toast.loading("Envoie du mail",{duration : 6000});
            console.log("Ajouter avec succés");
             UserService.createUser(user).then((res) => {
              toast.success("Creation avec succés");
              this.props.history.push("/userComponent");
            });
          } else {
            html += "</div>";
            document.getElementById("errors").innerHTML = html;
            toast.error("ERREUR");
            window.scrollTo(0, 0);
          }
        });
      });
    } else {
      UserService.getUserByEmail(this.state.email).then((response) => {
        if (response.data != "" && this.state.idU != response.data.idU) {
          html += "<li>Cet email existe deja</li>";
        }
        UserService.getUserByCin(this.state.cin).then((response) => {
          if (response.data != "" && this.state.idU != response.data.idU) {
            html += "<li>Ce numero du cin existe deja</li>";
          }
          if (html == "<div class='alert alert-danger'>") {
            console.log("Modifier avec succés");
            if (this.state.idU == UserInfos.userInfos.idU) {
              UserService.updateUser(this.state.idU, user);
              UserService.getUserByIdU(this.state.idU).then((response2) => {
                UserInfos.userInfos = response2.data;
                localStorage.setItem(
                  "userInfos",
                  JSON.stringify(UserInfos.userInfos)
                );
                toast.success("Modifier avec succés");
                this.props.history.push("/profil");
              });
            } else {
              UserService.updateUser(this.state.idU, user).then((res) => {
                toast.success("Modifier avec succés");
                this.props.history.push("/userComponent");
              });
            }
          } else {
            html += "</div>";
            document.getElementById("errors").innerHTML = html;
            toast.error("ERREUR");
            window.scrollTo(0, 0);
          }
        });
      });
    }
  };

  getButtons() {
    if (this.state.idU == -1) {
      console.log("ajouter buttons");
      return (
        <button
          className="btn btn-success margin-left-40 mt-10 "
          onClick={this.saveOrUpdateUser}
          disabled={!this.validateForm()}
        >
          Enregistrer
        </button>
      );
    } else {
      return (
        <div>
          <button
            className="btn btn-success col-4 offset-1  mt-20 "
            onClick={this.saveOrUpdateUser}
            disabled={!this.validateForm()}
          >
            Enregistrer
          </button>
          <button
            className="btn btn-danger col-4 offset-2  mt-20 "
            onClick={this.cancel}
          >
            Annuler
          </button>
        </div>
      );
    }
  }

  getTitle() {
    if (this.state.idU == -1) {
      return <h3 className="text-center mt-10">Créer un utilisateur</h3>;
    } else {
      return <h3 className="text-center mt-10">Modifier un utilisateur</h3>;
    }
  }

  cancel = (e) => {
    e.preventDefault();
    if (this.state.idU == UserInfos.userInfos.idU) {
      this.props.history.push("/profil");
    } else {
      this.props.history.push("/userComponent");
    }
    console.log("Annuler");
  };

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value.toUpperCase() });
  };

  changeSecondNameHandler = (event) => {
    this.setState({ secondName: event.target.value.toUpperCase() });
  };

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  changeCINHandler = (event) => {
    this.setState({ cin: event.target.value.toUpperCase() });
  };

  changeSexeHandler = (event) => {
    this.setState({ sexe: parseInt(event.target.value) });
  };

  changeAddressHandler = (event) => {
    this.setState({ address: event.target.value.toUpperCase() });
  };

  changeCityHandler = (event) => {
    this.setState({ city: event.target.value.toUpperCase() });
  };

  changeCountryHandler = (event) => {
    this.setState({ country: event.target.value.toUpperCase() });
  };

  changeBirthdayHandler = (event) => {
    this.setState({ birthday: event.target.value });
  };

  changeBirthplaceHandler = (event) => {
    this.setState({ birthplace: event.target.value.toUpperCase() });
  };

  changePhoneHandler = (event) => {
    this.setState({ phone: parseInt(event.target.value) });
  };

  changeProfilHandler = (event) => {
    this.setState({ profil: event.target.value.toUpperCase() });
  };

  validateForm() {
    return (
      this.state.address.length > 0 &&
      this.state.birthday.length > 0 &&
      this.state.birthplace.length > 0 &&
      this.state.cin.length > 0 &&
      this.state.city.length > 0 &&
      this.state.country.length > 0 &&
      this.state.email.length > 0 &&
      this.state.firstName.length > 0 &&
      this.state.password.length > 0 &&
      this.state.phone.length != "" &&
      this.state.secondName.length > 0 &&
      this.state.profil.length > 0 &&
      this.state.sexe.length != "" > 0
    );
  }
  showForm() {
    if (UserInfos.userInfos.profil == "ADMIN") {
      return false;
    }
    if (this.state.idU == -1) {
      return false;
    } else {
      return true;
    }
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
                  <div className="form-groupe">
                    <label>Prenom :</label>
                    <input
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-groupe">
                    <label>Nom :</label>
                    <input
                      name="secondName"
                      className="form-control"
                      value={this.state.secondName}
                      onChange={this.changeSecondNameHandler}
                    />
                  </div>
                  <div className="form-groupe">
                    <label>Email :</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <div className="form-groupe">
                    <label>Mot de passe :</label>
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      value={this.state.password}
                      onChange={this.changePasswordHandler}
                    />
                  </div>
                  <div className="form-groupe">
                    <label>CIN :</label>
                    <input
                      name="cin"
                      className="form-control"
                      value={this.state.cin}
                      onChange={this.changeCINHandler}
                    />
                  </div>
                  <div className="form-groupe">
                    <label>Sexe :</label>
                    <br />
                    <input
                      type="radio"
                      value={1}
                      name="sexe"
                      onChange={this.changeSexeHandler}
                      checked={this.state.sexe === 1}
                    />
                    Masculin
                    <input
                      type="radio"
                      value={0}
                      name="sexe"
                      className="margin-left-25 "
                      onChange={this.changeSexeHandler}
                      checked={this.state.sexe === 0}
                    />
                    Feminin
                  </div>
                  <div className="form-groupe">
                    <label>Adresse :</label>
                    <input
                      name="address"
                      className="form-control"
                      value={this.state.address}
                      onChange={this.changeAddressHandler}
                    />
                  </div>
                  <div className="form-groupe">
                    <label>Ville :</label>
                    <input
                      name="city"
                      className="form-control"
                      value={this.state.city}
                      onChange={this.changeCityHandler}
                    />
                  </div>
                  <div className="form-groupe">
                    <label>Pays :</label>
                    <input
                      name="country"
                      className="form-control"
                      value={this.state.country}
                      onChange={this.changeCountryHandler}
                    />
                  </div>
                  <div className="form-groupe">
                    <label>Jour de naissance :</label>
                    <input
                      type="date"
                      name="birthday"
                      className="form-control"
                      value={this.state.birthday}
                      onChange={this.changeBirthdayHandler}
                    />
                  </div>
                  <div className="form-groupe">
                    <label>Lieu de naissance :</label>
                    <input
                      name="birthplace"
                      className="form-control"
                      value={this.state.birthplace}
                      onChange={this.changeBirthplaceHandler}
                    />
                  </div>
                  <div className="form-groupe">
                    <label>Numero de telephone :</label>
                    <input
                      type="number"
                      name="phone"
                      className="form-control"
                      value={this.state.phone}
                      onChange={this.changePhoneHandler}
                    />
                  </div>
                  <div hidden={this.showForm()} className="form-groupe">
                    <label>Profile :</label>
                    <br />
                    <input
                      type="radio"
                      value="ADMIN"
                      name="profil"
                      onChange={this.changeProfilHandler}
                      checked={this.state.profil === "ADMIN"}
                    />
                    Admin
                    <input
                      type="radio"
                      value="RESPONSABLE"
                      name="profil"
                      className="margin-left-25 "
                      onChange={this.changeProfilHandler}
                      checked={this.state.profil === "RESPONSABLE"}
                    />
                    Responsable
                    <input
                      type="radio"
                      value="AGENT"
                      name="profil"
                      className="margin-left-25 "
                      onChange={this.changeProfilHandler}
                      checked={this.state.profil === "AGENT"}
                    />
                    Agent
                  </div>
                  {this.getButtons()}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddUser);
