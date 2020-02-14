import React from "react";
import firebase from "../../firebase.js";
import { DataInput } from "./DataInput";

import "./Data.scss";

function Data() {
  const [Data, setData] = React.useState([]);
  const [newData, setNewData] = React.useState();
  const [timeFrom, setTimeFrom] = React.useState();
  const [timeTo, setTimeTo] = React.useState();
  let nrBird = [];
  let x = [];
  nrBird = Data;
  const [correctObs, setCorrectObs] = React.useState([{ id: 1 }]);
  const [myButtons, setMyButtons] = React.useState([]);

  for (var i = 0; i < nrBird.length; i++) {
    x.push(parseInt(Data[i].Bird));
    //Do something
  }

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

    //const data = await db.collection("Data").get();
    //setData(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  }, []);

  const setTime = () => {
    let intData = [];
    for (var i = 0; i < Data.length; i++) {
      if (Data[i].TimeStamp >= timeFrom && Data[i].TimeStamp <= timeTo) {
        intData.push(Data[i]);
      }

      //inter = Data[i];
    }

    setCorrectObs(intData);
    setMyButtons([1]);
  };

  const setDay = () => {
    setMyButtons([...myButtons, 1]);
  };
  const setWeek = () => {
    setMyButtons([...myButtons, 2]);
  };
  const setMonth = () => {
    setMyButtons([...myButtons, 3]);
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
            valueAsNumber={timeFrom}
            onChange={e => setTimeFrom(e.target.valueAsNumber / 1000)}
          />
        </div>
        <div className="datoBoks">
          <h4 className="fromTo">To:</h4>

          <input
            type="date"
            className="dateForm"
            valueAsNumber={timeTo}
            onChange={e => setTimeTo(e.target.valueAsNumber / 1000)}
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
        <button className="selectButton" onClick={setWeek}>
          Week
        </button>
        <button className="selectButton" onClick={setMonth}>
          Month
        </button>
      </div>
      {myButtons.map(timeInterval => (
        <div className="Card">
          <div id="chart" key={correctObs.id}>
            <DataInput
              myData={correctObs}
              timeInterval={timeInterval}
              timeFrom={timeFrom}
              timeTo={timeTo}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Data;
