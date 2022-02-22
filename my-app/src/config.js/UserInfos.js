import { Component } from "react";

class UserInfos extends Component {
  userInfos = [];
  constructor(props) {
    super(props);
    this.userInfos = JSON.parse(localStorage.getItem("userInfos"));
    console.log(localStorage);

    console.log(localStorage.getItem("userInfos"));
  }
}

export default new UserInfos();
