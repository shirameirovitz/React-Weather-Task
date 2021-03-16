import "./App.css";

class Day {
  constructor(day, image, minTemperature, maxTemperature) {
    this.day = day;
    this.image = image;
    this.minTemperature = minTemperature;
    this.maxTemperature = maxTemperature;
  }
}

const weekDays = [
  new Day("Sunday"),
  new Day("Monday"),
  new Day("Tuesday"),
  new Day("Wednesday"),
  new Day("Thursday"),
  new Day("friday"),
  new Day("Saturday"),
];
