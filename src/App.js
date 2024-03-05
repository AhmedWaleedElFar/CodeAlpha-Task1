import { findByLabelText } from "@testing-library/react";
import { Component } from "react";
import Content from "./contentt";

class App extends Component {
  render() {
    return (
      <Title
        name="Age Calculator"
        phrase="Unlock the Secrets of Time: Your Age Calculator Companion!"
      />
    );
  }
}

class Title extends Component {
  render() {
    const appStyle = {
      background: "#ffffff",
      color: "rgb(255, 92, 92)",
      width: "max-content",
      margin: "auto",
      width: "50%",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      opacity: 0.96,
      boxShadow: "5px",
      textShadow: "0.3px 0.2px black",
    };
    const boldStyle = {
      fontFamily: "Fantasy",
      fontSize: "160%",
      textAlign: "center",
    };
    const title = {
      fontFamily: "Fantasy",
      fontSize: "160%",
      textAlign: "center",
    };
    const subTitle = {
      fontFamily: "Serif",
      fontSize: "100%",
      textAlign: "center",
      boxShadow: "0px",
      textShadow: "0px 0px black",
    };
    return (
      <div style={appStyle} className="Title">
        <b style={title}> {this.props.name} </b>
        <b style={subTitle}> {this.props.phrase} </b>
        <br></br>
        <Content />
      </div>
    );
  }
}
export default App;
