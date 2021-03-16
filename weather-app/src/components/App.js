import "./DayWeather.css";
import DayWeather from "./DayWeather";

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

function App() {
  return (
    <div className="week-weather">
      {weekDays.map((item, index) => {
        return (
          <DayWeather
            key={index}
            day={item.day}
            image={item.image}
            minTemperature={item.minTemperature}
            maxTemperature={item.maxTemperature}
          />
        );
      })}
    </div>
  );
}
export default App;
