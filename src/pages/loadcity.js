import React, { useState, useEffect, useContext} from "react";
// import loadable from "@loadable/component";
import { InputUI } from "./uicomponents";
import { AppContext } from "./app";

// const InputUI = loadable(() => import("./uicomponents"), {
//   fallback: <h1>Loading...</h1>,
// });


const LoadCity = () => {
  console.log("load city ...");
  const { selectedCity } = useContext(AppContext);
  const [cityList, setCityList] = useState([]);
  //debugger;
  useEffect(() => {
    (async () => {
      if (!cityList) return;
      console.log("load city effect ...");
      const response = await fetch("http://localhost:3000/weather?search=Ch", {
        method: "POST",
      });
      const data = await response.json();
      setCityList(data);
    })();
  }, []);

  return (
    <>
      {/* <AppContext.Consumer>
        {(context) => ( */}
      <div className="rounded-lg shadow-lg bg-white p-4 mr-4 col-span-2">
        <InputUI
          key="City"
          items={cityList}
          label={"Location"}
          itemID={"location"}
          defaultItem={selectedCity}
        />
      </div>
      {/* )}
      </AppContext.Consumer> */}
    </>
  );
};

export default LoadCity;
