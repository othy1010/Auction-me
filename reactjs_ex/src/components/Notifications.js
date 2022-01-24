import React, { Component } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import UserInfos from "../config.js/UserInfos";
import UserService from "../services/UserService";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
    };
    this.deleteNotification = this.deleteNotification.bind(this);
    this.moveTo = this.moveTo.bind(this);

  }

  componentDidMount() {
    UserService.getNotifications(UserInfos.userInfos.idU).then((response) => {
      this.setState({
        notifications: response.data,
      });
    });
  }

  deleteNotification(idN) {
    UserService.deleteNotification(idN).then((resp) => {
      this.setState({
        notifications: this.state.notifications.filter(
          (notification) => notification.idN !== idN
        ),
      });
    });
  }

  moveTo(idN, title) {
    UserService.deleteNotification(idN).then((resp) => {
      if (title == "Compte" || title == "Groupe") {
        this.props.history.push("/profil");
      }
      if (title == "Planning") {
        this.props.history.push("/monPlanning");
      }
      if(title =="Email"){
        window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
        this.props.history.push("/profil");
      }
    });
  }


  render() {
    return (
      <div className="container main-component text-center centred">
        <h1 className="mb-20">Notifications</h1>
        {this.state.notifications.map((notification) => (
          <div data-test="container" className="container mb-20">
            <div
              data-test="notification"
              className="toast fade show stylish-color-dark"
            >
              <div className="toast-header elegant-color-dark white-text">
                <i
                  data-test="fa"
                  className="fa fa-bell fa-lg mr-2 blue-grey-text"
                ></i>
                <strong className="mr-auto">{notification.title}</strong>
                <small></small>
                <button
                  data-test="close-button"
                  type="button"
                  className="close ml-2 mb-1 blue-grey-text"
                  aria-label="Close"
                  onClickCapture={() =>
                    this.deleteNotification(notification.idN)
                  }
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div
                className="toast-body font-weight-bold white-text"
                onClick={() =>
                  this.moveTo(notification.idN, notification.title)
                }
              >
                <p dangerouslySetInnerHTML={{__html: notification.text}}></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(Notifications);
