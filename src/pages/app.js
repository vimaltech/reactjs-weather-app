import React, { createContext, useState, useMemo } from "react";
import Weather from "./weather";

export const selectedValues = {
  city: "",
  uint: "",
};

export const AppContext = createContext();

export const App = (props) => {
  console.log("App...");
  const [selectedCity, setSelectedCity] = useState("Chennai");
  const [selectedUnit, setSelectedUnit] = useState("Celsius");


  const providerValue = {
    selectedCity,
    setSelectedCity,
    selectedUnit,
    setSelectedUnit,
  };
  

  return (
    <AppContext.Provider value={providerValue}>
      <Weather />
    </AppContext.Provider>
  );
};
