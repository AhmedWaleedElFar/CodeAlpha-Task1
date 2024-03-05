import { Component } from "react";

class Age extends Component {
  render() {
    return (
      <div className="Age" style={this.props.divStyle}>
        <label style={this.props.labelStyle}>The Age is</label>
        <label style={this.props.labelStyle}>
          {this.props.years} years, {this.props.months} months,
          {this.props.days} days
        </label>
      </div>
    );
  }
}

export default Age;
