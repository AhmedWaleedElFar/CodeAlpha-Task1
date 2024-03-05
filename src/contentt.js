import React, { Component } from "react";
import Age from "./Age";

const labelStyle = {
  fontSize: "70%",
  padding: "10px",
  fontFamily: "Arial",
  textShadow: "0.3px 0.2px black",
};
const dateDiv = {
  display: "flex",
  flexDirection: "column",
};
const inputStyle = {
  color: "rgb(255, 153, 153)",
  borderColor: "rgb(255, 153, 153)",
  padding: "5px",
  margin: "5px",
};
const buttonStyle = {
  padding: "5px",
  margin: "5px",
  borderColor: "rgb(255, 153, 153)",
  backgroundColor: "#ffffff",
  color: "rgb(255, 153, 153)",
  textShadow: "0.3px 0.2px black",
};

class Content extends Component {
  state = {
    years: null,
    months: null,
    days: null,
    ageCalculated: false, // New state variable to track if age is calculated
  };

  calculateAge = () => {
    const dateValue = document.getElementById("dateEntry").value;
    const currentDate = new Date();
    const enteredDate = new Date(dateValue);

    let diffInYears = currentDate.getFullYear() - enteredDate.getFullYear();
    let diffInMonths = currentDate.getMonth() - enteredDate.getMonth();
    let diffInDays = currentDate.getDate() - enteredDate.getDate();

    if (diffInMonths < 0 || (diffInMonths === 0 && diffInDays < 0)) {
      diffInYears--;
      diffInMonths += 12;
    }

    if (diffInDays < 0) {
      const tempDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      );
      diffInDays =
        tempDate.getDate() - enteredDate.getDate() + currentDate.getDate();
      diffInMonths--;
    }

    this.setState({
      years: diffInYears,
      months: diffInMonths,
      days: diffInDays,
      ageCalculated: true, // Update state to indicate age is calculated
    });
  };

  render() {
    return (
      <div className="content" style={dateDiv}>
        <label style={labelStyle}> Input the date:</label>
        <input type="date" id="dateEntry" style={inputStyle}></input>
        <button style={buttonStyle} onClick={this.calculateAge}>
          Calculate
        </button>
        {this.state.ageCalculated && ( // Conditionally render Age component
          <Age
            divStyle={dateDiv}
            labelStyle={labelStyle}
            years={this.state.years}
            months={this.state.months}
            days={this.state.days}
          />
        )}
      </div>
    );
  }
}

export default Content;
