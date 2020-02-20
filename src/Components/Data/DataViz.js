import React from "react";
import firebase from "../../firebase.js";
import { DataInput } from "./DataInput";

import "./DataViz.scss";

function DataViz() {
  React.state = {};

  const [Data, setData] = React.useState([]);
  const [dateFrom, setDateFrom] = React.useState();
  const [dateTo, setDateTo] = React.useState();
  const [timeFrom, setTimeFrom] = React.useState();
  const [timeTo, setTimeTo] = React.useState();
  let nrBird = [];
  let x = [];
  nrBird = Data;
  const [correctObs, setCorrectObs] = React.useState([{ id: 1 }]);
  const [myButtons, setMyButtons] = React.useState([]);

  React.useEffect(() => {
    const db = firebase.firestore();
    return db
      .collection("Unit")
      .doc("Node1")
      .collection("Activity")
      .onSnapshot(snapsshot => {
        const intData = [];
        snapsshot.forEach(doc => intData.push({ ...doc.data(), id: doc.id }));

        setData(intData);
      });
  }, []);

  const setTime = () => {
    let intData = [];

    for (var i = 0; i < Data.length; i++) {
      if (Data[i].TimeStamp >= dateFrom && Data[i].TimeStamp <= dateTo) {
        intData.push(Data[i]);
      }

      //inter = Data[i];
    }

    setCorrectObs(intData);
  };

  const setDay = () => {
    setMyButtons([...myButtons, 1]);
  };

  return (
    <div className="Data">
      <div className="Dato">
        <div className="datoBoks">
          <label for="Node">Choose a node:</label>

          <select className="nodeSelect" id="Node">
            <option value="Node 1">Node 1</option>
            <option value="Node 2">Node 2</option>
            <option value="Node 3">Node 3</option>
          </select>
        </div>
        <div className="datoBoks">
          <h4 className="fromTo">From:</h4>

          <input
            type="date"
            className="dateForm"
            valueAsNumber={dateFrom}
            onChange={e => setDateFrom(e.target.valueAsNumber / 1000)}
          />
        </div>
        <div className="datoBoks">
          <h4 className="fromTo">To:</h4>

          <input
            type="date"
            className="dateForm"
            valueAsNumber={dateTo}
            onChange={e => setDateTo(e.target.valueAsNumber / 1000)}
          />
        </div>
        <div className="datoBoks">
          <button id="demo" className="dataButton" onClick={setTime}>
            Get data from node
          </button>
        </div>
      </div>
      <div className="selectButtons">
        <button className="selectButton" onClick={setDay}>
          Day
        </button>
        <button className="selectButton" onClick={setDay}>
          Week
        </button>
        <button className="selectButton" onClick={setDay}>
          Month
        </button>
        <input
          type="time"
          id="appt"
          name="appt"
          valueAsNumber={timeTo}
          min="00:00"
          max="23:59"
          required
          onChange={e => setTimeTo(e.target.valueAsNumber / 1000)}
        ></input>
        <input
          type="time"
          id="appt"
          name="appt"
          valueAsNumber={timeFrom}
          min="00:00"
          max="23:59"
          required
          onChange={e => setTimeFrom(e.target.valueAsNumber / 1000)}
        ></input>
      </div>
      <div className="Wrapper">
        {myButtons.map(timeInterval => (
          <div className="Card">
            <div className="TheChart" id="chart" key={correctObs.id}>
              <DataInput
                myData={correctObs}
                timeInterval={timeInterval}
                timeFrom={dateFrom}
                timeTo={dateTo}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataViz;
