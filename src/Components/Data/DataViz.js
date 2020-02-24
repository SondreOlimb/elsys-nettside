import React, { useState } from "react";
import firebase from "../../firebase.js";
import { DataInput } from "./DataInput";
import App from "./../Maps/Maps.js";

import "./DataViz.scss";
import { PieWheel } from "./Graph/PieWheel.js";
import Maps from "../Maps/Maps.js";

function DataViz() {
  React.state = {};

  const [Node, setNode] = React.useState([]);
  const [mapData, setData] = React.useState([]);
  const [dateFrom, setDateFrom] = React.useState();
  const [dateTo, setDateTo] = React.useState();
  const [timeFrom, setTimeFrom] = React.useState();
  const [timeTo, setTimeTo] = React.useState();
  let nrBird = [];
  let x = [];

  const [correctObs, setCorrectObs] = React.useState([{ id: 1 }]);
  const [myButtons, setMyButtons] = React.useState([]);
  let i = 1;

  React.useEffect(() => {
    let intData2 = [];
    let intData3 = [];
    let intData4 = [];

    const db = firebase.firestore();
    return db
      .collection("Unit")
      .doc("Node2")
      .collection("Activity")
      .onSnapshot(snapsshot => {
        const intData = [];
        snapsshot.forEach(doc => intData.push({ ...doc.data(), id: doc.id }));
        for (let i = 0; i < intData.length; i++) {
          intData3 = intData[i].Cord;

          try {
            intData4 = [intData3[0], intData3[1], 1];
            intData2.push(intData4);
          } catch (error) {
            console.error(error);
          }
        }

        setData(intData2);
        setMyButtons([1]);
      });
  }, []);

  const setDay = () => {
    setMyButtons([...myButtons, 1]);
  };

  return (
    <div className="Data">
      {myButtons.map(timeInterval => (
        <div className="Card">
          <div className="TheChart" id="chart" key={(i = i + 1)}>
            <Maps myData={mapData} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default DataViz;
