import React from 'react';
import axios from 'axios';
const SPRING_SERVER = 'http://localhost:8080/api'
const USER_API_URL = `${SPRING_SERVER}/users`
const USERID_API_URL = `${USER_API_URL}/userId`
const USERNAME_API_URL = `${USER_API_URL}/username`
const USERTOKEN_API_URL = `${USER_API_URL}/token`
const USEREMAIL_API_URL = `${USER_API_URL}/email`


class UserService {
    createUser(user){
        return axios.post(USER_API_URL, user)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    }
    getUsers(){
        return axios.get(USER_API_URL);
    }

    findByEmail(email){
        return axios.get(USEREMAIL_API_URL+'/'+email);
    }

    findByUserId(idU){
        return axios.get(USERID_API_URL+'/'+idU);
    }

    findByUsername(username){
        return axios.get(USERNAME_API_URL+'/'+username);
    }

    findByToken(token){
        return axios.get(USERTOKEN_API_URL+'/'+token);
    }

    updateUser(idU,user){
        return axios.put(USERID_API_URL+'/'+idU, user);
    }

    // User findBybidID(long bidId);
    // User findByItemId(long itemId);

    deleteUser(idU){
        return axios.delete(USERID_API_URL+'/'+idU);
    }

    /*notifications*/
    getUserNotifications() {
        return axios.get(SPRING_SERVER + "/notifications/users");
    }
    deleteUserNotification(idN) {
        return axios.delete(SPRING_SERVER + "/notifications/" + idN);
    }

};

export default new UserService();
