import React, { Component } from "react";
import { DatePicker } from "react-trip-date";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { format } from "date-fns";
import UserService from "../services/UserService";
import UserInfos from "../config.js/UserInfos";

const handleResponsive = (setNumberOfMonth) => {
  let width = document.querySelector(".tp-calendar").clientWidth;
  if (width > 900) {
    setNumberOfMonth(3);
  } else if (width < 900 && width > 580) {
    setNumberOfMonth(2);
  } else if (width < 580) {
    setNumberOfMonth(1);
  }
};

const Day = ({ day }) => {
  return (
    <>
      <p className="date">{day.format("DD")}</p>
      <p className="date">7</p>
    </>
  );
};

class MyPlanning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idG: UserInfos.userInfos.idG,
      plannings: [],
      dates: [],
    };
  }

  componentDidMount() {
    if (this.state.idG != null) {
      UserService.getGroupeByIdG(this.state.idG).then((response) => {
        console.log(response.data);
        this.setState({
          plannings: response.data.plannings,
        });
        // this.setDates();
        let date = [];
        this.state.plannings.map((planning) => {
          let dateS = new Date(planning.startDate);
          let dateE = new Date(planning.endDate);
          date.push(format(dateS, "yyyy-MM-dd"));
          console.log(dateS);
          console.log(dateE);
          console.log(dateS < dateE);
          while (dateS < dateE) {
            dateS.setDate(dateS.getDate() + 1);
            date.push(format(dateS, "yyyy-MM-dd"));
            console.log(dateS);
          }
          this.setState({
            dates: date,
          });
          console.log(this.state.dates);
        });
        this.setState({
          dates: date,
        });
      });
    }
  }

  render() {
    if (this.state.idG == null) {
      return (
        <div className="container text-center main-component">
          <h3>
            Vous n'appartenez à aucun groupe contactez votre responsable pour
            plus d'infos .
          </h3>
        </div>
      );
    } else {
      return (
        <div className="container main-component">
          <DatePicker
            onChange={(dates) => console.log("dates", dates)}
            selectedDays={this.state.dates} //initial selected days
            jalali={false}
            numberOfMonths={3}
            numberOfSelectableDays={1000} // number of days you need
            disabledDays={[]} //disabeld days
            responsive={handleResponsive} // custom responsive, when using it, `numberOfMonths` props not working
            disabledBeforToday={false}
            disabled={true} // disable calendar
            dayComponent={"2021-08-02"} //custom day component
            titleComponent={"Title"} // custom title of days
          />
        </div>
      );
    }
  }
}

export default withRouter(MyPlanning);
