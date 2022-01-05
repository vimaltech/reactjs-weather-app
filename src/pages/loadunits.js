import React, { useContext } from "react";
// import loadable from "@loadable/component";
import { InputUI } from "./uicomponents";
import { AppContext } from "./app";

// const InputUI = loadable(() => import("./uicomponents"), {
//   fallback: <h1>Loading...</h1>,
// });

const loadUnits = ({ items, label, itemID, defaultItem }) => {
  console.log("load Units...");
  const {selectUnits} = useContext(AppContext);
  return (
    <div className="rounded-lg shadow-lg bg-white p-4">
      <InputUI
        key="Units"
        items={[
          { id: 3, name: "Celsius", label: "A" },
          { id: 4, name: "Fahrenheit", label: "B" },
        ]}
        label={"Units"}
        itemID={"units"}
        defaultItem={selectUnits}
      />
    </div>
  );
};

export default loadUnits;
