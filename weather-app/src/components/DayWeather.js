import React, { Component } from "react";

export default class DayWeather extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="day-weather">
        <p>{this.props.day}</p>
        <img className="image" alt="" src={this.props.image}></img>
        <div className="temperature">
          <span className="minTemperature">{this.props.minTemperature}º</span>
          <span className="maxTemperature">{this.props.maxTemperature}º</span>
        </div>
      </div>
    );
  }
}

DayWeather.defaultProps = {
  day: "happy",
  image: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
  minTemperature: "20",
  maxTemperature: "38",
};
