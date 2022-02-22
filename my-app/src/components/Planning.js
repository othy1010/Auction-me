import React, { Component } from "react";
import { DatePicker } from "react-trip-date";
import { format } from "date-fns";
import { withRouter } from "react-router-dom";
import UserService from "../services/UserService";
import toast from "react-hot-toast";

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

class Planning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idG: this.props.match.params.idG,
      plannings: [],
      dates: [],
      groupeName:"",
    };
    this.setDates = this.setDates.bind(this);
    this.addPlanning = this.addPlanning.bind(this);
    this.back = this.back.bind(this);
    this.deletePlanning = this.deletePlanning.bind(this);
  }

  setDates() {
    this.state.plannings.map((planning) => {
      let dateS = new Date(planning.startDate);
      let dateE = new Date(planning.endDate);
      this.state.dates.push(format(dateS, "yyyy-MM-dd"));
      console.log(dateS);
      console.log(dateE);
      console.log(dateS < dateE);
      while (dateS < dateE) {
        dateS.setDate(dateS.getDate() + 1);
        this.state.dates.push(format(dateS, "yyyy-MM-dd"));
        console.log(dateS);
      }
      console.log(this.state.dates);
    });
  }

  componentDidMount() {
    UserService.getGroupeByIdG(this.state.idG).then((response) => {
      console.log(response.data);
      this.setState({
        plannings: response.data.plannings,
        groupeName:response.data.groupeName,
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

  back() {
    this.props.history.push("/groupeComponent");
  }

  editPlanning(idP) {
    var startDate = document.getElementById("startDate" + idP).value;
    var endDate = document.getElementById("endDate" + idP).value;
    var html =
      "<div class='alert alert-danger'><li>Date debut est superieure au Date fin</li></div>";
    if (startDate > endDate) {
      document.getElementById("error" + idP).innerHTML = html;
      toast.error("ERREUR");
    } else {
      document.getElementById("error" + idP).innerHTML = "";
      let planning = {
        startDate: startDate,
        endDate: endDate,
      };
      UserService.updatePlanning(idP, planning).then((res) => {
        console.log(res);
        this.componentDidMount();
        toast.success("Modification avec succés");
        window.scrollTo(0, 0);
      });
    }
  }

  deletePlanning(idP) {
    UserService.deletePlanning(idP).then((res) => {
      this.componentDidMount();
      toast.success("Suppression avec succés");
    });
  }

  addPlanning() {
    var startDate = document.getElementById("startDateAdd").value;
    var endDate = document.getElementById("endDateAdd").value;
    if (startDate != "" && endDate != "") {
      var html =
        "<div class='alert alert-danger'><li>Date debut est superieure au Date fin</li></div>";
      if (startDate > endDate) {
        document.getElementById("errorAdd").innerHTML = html;
        toast.error("ERREUR");
      } else {
        document.getElementById("errorAdd").innerHTML = "";
        let planning = {
          startDate: startDate,
          endDate: endDate,
          idG: this.state.idG,
        };
        UserService.createPlanning(planning).then((res) => {
          console.log(res);
          document.getElementById("startDateAdd").value = "";
          document.getElementById("endDateAdd").value = "";
          toast.success("Creation avec succés");
          window.scrollTo(0, 0);
          this.componentDidMount();
        });
      }
    } else {
      var html =
        "<div class='alert alert-danger'><li>Entrez les deux Dates</li></div>";
      document.getElementById("errorAdd").innerHTML = html;
      toast.error("ERREUR");
    }
  }

  render() {
    return (
      <div>
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
        <div className="container main-component">
          <h1 className="text-center">Gestion du Planning du groupe {this.state.groupeName}</h1>
          <div className="mt-10 text-center offset-3 col-6" id="errorAdd"></div>
          <div className="text-center row">
            <div className="col-md-3 offset-2">
              <label>Date debut :</label>
              <input
                type="date"
                id="startDateAdd"
                name="startDateAdd"
                className="form-control"
              />
            </div>
            <div className="col-md-3">
              <label>Date fin :</label>
              <input
                type="date"
                id="endDateAdd"
                name="endDateAdd"
                className="form-control"
              />
            </div>
            <div className="col-md-3 pd-25">
              <button
                onClick={this.addPlanning}
                id="btn-create"
                className="btn btn-success mt-10"
              >
                Creer
              </button>
            </div>
          </div>
          {this.state.plannings.map((planning) => (
            <div>
              <div
                className="mt-10 text-center offset-3 col-6"
                id={"error" + planning.idP}
              ></div>
              <div className="text-center row">
                <div className="col-md-3">
                  <label>Date debut :</label>
                  <input
                    type="date"
                    id={"startDate" + planning.idP}
                    name={"startDate" + planning.idP}
                    className="form-control"
                    defaultValue={planning.startDate}
                  />
                </div>
                <div className="col-md-3">
                  <label>Date fin :</label>
                  <input
                    type="date"
                    id={"endDate" + planning.idP}
                    name={"endDate" + planning.idP}
                    className="form-control"
                    defaultValue={planning.endDate}
                  />
                </div>
                <div className="col-md-3 pd-25">
                  <button
                    onClick={() => this.editPlanning(planning.idP)}
                    className="btn btn-success mt-10 "
                  >
                    Modifier
                  </button>
                </div>
                <div className="col-md-3 pd-25">
                  <button
                    onClick={() => this.deletePlanning(planning.idP)}
                    className="btn btn-danger mt-10"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            id="deconnect-btn"
            onClick={this.back}
            className="btn btn-secondary "
          >
            Retour
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Planning);
