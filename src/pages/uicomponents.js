import { element } from "prop-types";
import React, { useContext, useState } from "react";
import { AppContext } from "./app";

export const CardsUI = ({ items }) => {

  if (items.main) {
    console.log('CardsUI', items.main);
    let weatherDetails = Object.keys(items.main).map((key, index) => {
      return (
      <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center" key={index}>
        <div className="p-2 border-b border-gray-300 font-medium">
          {key}
        </div>
        <div className="p-2">
          <p className="text-gray-700 text-base">{items.main[key]}</p>
        </div>
      </div>
      )
    })
    return (
      <>
        <div className="flex m-2">
          {weatherDetails}
        </div>
      </>
    );
  }else{
    return <>Loading..</>
  }
};

export const InputUI = ({ items, label, itemID, defaultItem }) => {
  const [defaultSelected, setDefaultSelected] = useState(defaultItem);
  const contextValues = useContext(AppContext);

  const onClickHandler = (event) => {
    setDefaultSelected(event.target.value);
    //debugger;
    if (label === "Location") {
      contextValues.setSelectedCity(event.target.value);
    } else if (label === "Units") {
      contextValues.setSelectedUnit(event.target.value);
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="font-bold">{label}</div>
        <div className="mt-1">
          <select
            className="bg-gray-100 shadow-sm focus:outline-none w-2/6"
            value={defaultSelected}
            id={itemID}
            onChange={onClickHandler}
          >
            {/* [Violation] 'setTimeout' handler took 365ms */}
            {/* [Violation] 'react-invokeguardedcallback' handler took 1292ms */}

            {items.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}{" "}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export const Header = () => {
  console.log("Header .....");
  return (
    <>
      <div className="flex mb-5 border-b border-fuchsia-600 justify-center">
        <div>
          <div className="font-bold">Weather Watch</div>
          <div className="mt-1 mb-1 text-xs text-gray-500">
            Posted 5 Days Ago
          </div>
        </div>
      </div>
    </>
  );
};
