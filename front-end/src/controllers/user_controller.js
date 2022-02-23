import axios from "axios";

const USERS_REST_API_URL = "http://localhost:8080/api/users";


class UserService {
   //users
   getUsers() {
      return axios.get(USERS_REST_API_URL);
   }
   getUserById(userId) {
      return axios.get(USERS_REST_API_URL + "/userId/" + userId);
   }
   getUserByEmail(email) {
      return axios.get(USERS_REST_API_URL + "/email/" + email);
   }
   createUser(user) {
      return axios.post(USERS_REST_API_URL, user);
   }

   getUserByUsername(Username) {
      return axios.get(USERS_REST_API_URL + "/Username/" + Username);
   }
   getUserByToken(Token) {
      return axios.get(USERS_REST_API_URL + "/Token/" + Token);
   }
   updateUser(userId, user) {
      return axios.put(USERS_REST_API_URL + "/userId/" + userId, user);
   }
   deleteUser(idU) {
      return axios.delete(USERS_REST_API_URL + "/userId/" + userId);
   }

}

export default new UserService();
