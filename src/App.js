import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "b4c9bc5b5c196e25fda655800b907863";

class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units-metric`);
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <React.Fragment>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </React.Fragment>
    );
  }
};

export default App;