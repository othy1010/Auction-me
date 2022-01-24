import axios from "axios";

const USERS_REST_API_URL = "http://localhost:8080/api/users";
const GROUPES_REST_API_URL = "http://localhost:8080/api/groupes";
const PLANNINGS_REST_API_URL = "http://localhost:8080/api/plannings";
const EMAIL = "http://localhost:8080/api/email";
const NOTIFICATIONS_REST_API_URL = "http://localhost:8080/api/notifications";

class UserService {
  //users
  getUsers() {
    return axios.get(USERS_REST_API_URL);
  }
  createUser(user) {
    return axios.post(USERS_REST_API_URL, user);
  }
  getUserByEmail(email) {
    return axios.get(USERS_REST_API_URL + "/email/" + email);
  }
  getUserByCin(cin) {
    return axios.get(USERS_REST_API_URL + "/cin/" + cin);
  }
  getUserByIdU(idU) {
    return axios.get(USERS_REST_API_URL + "/idU/" + idU);
  }
  updateUser(idU, user) {
    return axios.put(USERS_REST_API_URL + "/idU/" + idU, user);
  }
  deleteUser(idU) {
    return axios.delete(USERS_REST_API_URL + "/idU/" + idU);
  }
  getUsersNotInGroupe(idG) {
    return axios.get(USERS_REST_API_URL + "/!idG/" + idG);
  }
  getUserByToken(token) {
    return axios.get(USERS_REST_API_URL + "/" + token);
  }

  //groupes
  getGroupes() {
    return axios.get(GROUPES_REST_API_URL);
  }
  deleteGroupe(idG) {
    return axios.delete(GROUPES_REST_API_URL + "/idG/" + idG);
  }
  getGroupeByIdG(idG) {
    return axios.get(GROUPES_REST_API_URL + "/idG/" + idG);
  }
  getGroupeByGroupeName(groupeName) {
    return axios.get(GROUPES_REST_API_URL + "/groupeName/" + groupeName);
  }
  updateGroupe(idG, groupe) {
    return axios.put(GROUPES_REST_API_URL + "/idG/" + idG, groupe);
  }
  createGroupe(groupe) {
    return axios.post(GROUPES_REST_API_URL, groupe);
  }
  deleteUserFromGroupe(idG, User) {
    return axios.post(GROUPES_REST_API_URL + "/removeUser/" + idG, User);
  }
  addUserToGroupe(idG, user) {
    return axios.post(GROUPES_REST_API_URL + "/addUser/" + idG, user);
  }

  //plannings
  getPlanningOfGroupe(idG) {
    return axios.get(PLANNINGS_REST_API_URL + "/" + idG);
  }
  updatePlanning(idP, planning) {
    return axios.put(PLANNINGS_REST_API_URL + "/" + idP, planning);
  }
  deletePlanning(idP) {
    return axios.delete(PLANNINGS_REST_API_URL + "/" + idP);
  }
  createPlanning(planning) {
    return axios.post(PLANNINGS_REST_API_URL, planning);
  }

  //email
  sendEmail(user) {
    return axios.post(EMAIL, user);
  }

  /*notifications*/
  getNotifications(idU) {
    return axios.get(NOTIFICATIONS_REST_API_URL + "/" + idU);
  }
  deleteNotification(idN) {
    return axios.delete(NOTIFICATIONS_REST_API_URL + "/" + idN);
  }
}

export default new UserService();
