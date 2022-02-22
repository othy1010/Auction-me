import React from "react";
import toast from "react-hot-toast";
import { withRouter } from "react-router-dom";
import UserInfos from "../config.js/UserInfos";
import UserService from "../services/UserService";

class UserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      idU: "",
      /*firstName: "",
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
      idG: "",*/
      groupeName: [],
    };
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    /*this.changeIdUHandler = this.changeIdUHandler.bind(this);
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
    this.changeIdGHandler = this.changeIdGHandler.bind(this);*/
  }

  /*changeIdUHandler = (event) => {
    this.setState({ idU: event.target.value });
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

  changeIdGHandler = (event) => {
    this.setState({ idG: event.target.value });
  };*/

  editUser(idU) {
    this.props.history.push(`/addUser/${idU}`);
  }

  async deleteUser(idU) {
    toast.loading("Envoie du mail", { duration: 6000 });
    await UserService.deleteUser(idU).then((resp) => {
      this.setState({
        users: this.state.users.filter((user) => user.idU !== idU),
      });
    });
    console.log("Suppression avec succés");
    toast.success("Suppression avec succés");
  }

  componentDidMount() {
    UserService.getUsers().then((response) => {
      var groupe = [];
      response.data.map((user) => {
        if (user.idU !== UserInfos.userInfos.idU) {
          if (user.idG == null) {
            groupe.push({ idU: user.idU, name: "-" });
            this.setState({ groupeName: groupe });
          } else {
            UserService.getGroupeByIdG(user.idG).then((resp) => {
              groupe.push({ idU: user.idU, name: resp.data.groupeName });
              this.setState({ groupeName: groupe });
            });
          }
        }
      });
      this.setState({
        users: response.data.filter(
          (user) => user.idU !== UserInfos.userInfos.idU
        ),
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

  render() {
    return (
      <div className="main-component">
        <h1 className="text-center">Liste des Utilisateurs</h1>
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
              <td>Mot de passe</td>
              <td>Profil</td>
              <td>Groupe</td>
            </tr>
          </thead>
          {/*
         <tbody className="table-dark">
            <tr>
              <td>
                <input
                  className="form-control"
                  value={this.state.idU}
                  onChange={this.changeIdUHandler}
                />
              </td>
              <td>
                <input
                  className="form-control"
                  value={this.state.firstName}
                  onChange={this.changeFirstNameHandler}
                />
              </td>
              <td>
                <input
                  className="form-control"
                  value={this.state.secondName}
                  onChange={this.changeSecondNameHandler}
                />
              </td>
              <td>
                <input
                  className="form-control"
                  value={this.state.sexe}
                  onChange={this.changeSexeHandler}
                />
              </td>
              <td>
                <input
                  className="form-control"
                  value={this.state.country}
                  onChange={this.changeCountryHandler}
                />
              </td>
              <td>
                <input
                  className="form-control"
                  value={this.state.city}
                  onChange={this.changeCityHandler}
                />
              </td>
              <td>
                <input
                  className="form-control"
                  value={this.state.address}
                  onChange={this.changeAddressHandler}
                />
              </td>
              <td>
                <input
                  className="form-control"
                  value={this.state.birthday}
                  onChange={this.changeBirthdayHandler}
                />
              </td>
              <td>
                <input
                  className="form-control"
                  value={this.state.birthplace}
                  onChange={this.changeBirthplaceHandler}
                />
              </td>
              <td>
                <input
                  className="form-control"
                  value={this.state.cin}
                  onChange={this.changeCINHandler}
                />
              </td>
              <td>
                <input
                  className="form-control"
                  value={this.state.phone}
                  onChange={this.changePhoneHandler}
                />
              </td>
              <td>
                <input
                  className="form-control"
                  value={this.state.email}
                  onChange={this.changeEmailHandler}
                />
              </td>
              <td>
                <input
                  className="form-control"
                  value={this.state.password}
                  onChange={this.changePasswordHandler}
                />
              </td>
              <td>
                <input
                  className="form-control"
                  value={this.state.profil}
                  onChange={this.changeProfilHandler}
                />
              </td>
              <td>
                <input
                  className="form-control"
                  value={this.state.idG}
                  onChange={this.changeIdGHandler}
                />
              </td>
            </tr>
          </tbody>
            */}
          {this.state.users.map((user) => (
            <tbody className="table-light">
              <tr key={user.idU}>
                <td>{user.idU}</td>
                {/*<td>{user.token}</td>*/}
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
                <td>{user.password}</td>
                <td>{user.profil}</td>
                <td>
                  {this.defined(
                    this.state.groupeName.find(({ idU }) => idU == user.idU)
                  )}
                </td>
              </tr>
              <tr className=" tr-user">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><button
                    onClick={() => this.editUser(user.idU)}
                    className="btn btn-success "
                  >
                    Modifier
                  </button></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>

                  <td>   <button
                    onClick={() => this.deleteUser(user.idU)}
                    className="btn btn-danger"
                  >
                    Supprimer
                  </button></td>
                  
                  <td></td>
                  <td></td>
                  <td></td>


               

              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

export default withRouter(UserComponent);
