import React, { useState, useEffect, useContext } from "react";
// import loadable from "@loadable/component";
import { CardsUI } from "./uicomponents";
import { AppContext } from "./app";

// const CardsUI = loadable(() => import("./uicomponents"), {
//   fallback: <h1>Loading...</h1>,
// });

const LoadReport = () => {
  const { selectedCity, selectedUnit } = useContext(AppContext);
  const [selectedCityReport, setCityReport] = useState({});

  console.log("Load Report...", selectedCity);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=761bd0ce089643b95614305873944acf`;

  const KelvinToCelsius = (k) => {
    return Math.round((k - 273.15) * 100) / 100;
  }
  const KelvinToFahrenheit = (k) => Math.round(((((k - 273.15) * 9)/5) + 32) * 100) / 100;

  const loadRep = async () => {
    // if (!cityReport) return;
    // console.log("load city report ...", selectedCityReport);
    //https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=761bd0ce089643b95614305873944acf
    //http://localhost:3000/weather?city=${selectedCity}
    const response = await fetch(url, {
      method: "POST",
    });
    console.log("loadRep....");
    const data = await response.json();

    data.main.pressure += "hPa";
    data.main.humidity += "%";

    if(selectedUnit === 'Celsius') {
      data.main.temp = KelvinToCelsius(data.main.temp) + '°C';
      data.main.feels_like = KelvinToCelsius(data.main.feels_like) + '°C';
      data.main.temp_min = KelvinToCelsius(data.main.temp_min) + '°C';
      data.main.temp_max = KelvinToCelsius(data.main.temp_max) + '°C';
    } else {
      data.main.temp =  KelvinToFahrenheit(data.main.temp) + '°F';
      data.main.feels_like = KelvinToFahrenheit(data.main.feels_like) + '°F';
      data.main.temp_min = KelvinToFahrenheit(data.main.temp_min) + '°F';
      data.main.temp_max = KelvinToFahrenheit(data.main.temp_max) + '°F';
    }
    setCityReport(data);
  };


  useEffect(() => {
    console.log("City change...");
    loadRep();
  }, [selectedCity, selectedUnit]);

  return (
    <>
      {/* <AppContext.Consumer>
        {(context) => ( */}
      <div className="flex space-x-4 rounded-lg p-4 mt-2 shadow-lg bg-white grid-flow-row-dense grid-cols-3 grid">
        <CardsUI items={selectedCityReport} />
        {/* <div>Selected City: {selectedCity}</div>
        <div>Selected Unit: {selectedUnit}</div> */}
        {/* <div>Selected temp: {selectedCityReport}</div> */}
      </div>
      {/* )}
      </AppContext.Consumer> */}
    </>
  );
};

export default LoadReport;
