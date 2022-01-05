import React, { useContext } from "react";
import loadable from "@loadable/component";
import { Header } from "./uicomponents";
import { AppContext } from "./app";

const LoadCity = loadable(() => import("./loadcity"), {
  fallback: <h1>Loading...</h1>,
});

const LoadUnits = loadable(() => import("./loadunits"), {
  fallback: <h1>Loading...</h1>,
});

const LoadReport = loadable(() => import("./loadReport"), {
  fallback: <h1>Loading...</h1>,
});

const Weather = () => {
  // const selectedValues = useContext(AppContext);

  console.log("Weather ... ");
  return (
    <>
      <div className="flex m-10">
        <div className="justify-between rounded bg-gray-100 p-8 w-full">
          <Header />
          <div className="flex p-1 grid-flow-row-dense grid-cols-3 grid">
            <LoadCity />
            <LoadUnits />
          </div>
          <LoadReport/>
          {/* selectedCity={selectedValues.selectedCity} selectedUnit={selectedValues.selectedUnit} */}
        </div>
      </div>
    </>
  );
};
export default Weather;
