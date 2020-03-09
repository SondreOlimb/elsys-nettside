import React from "react";
import firebase from "../../firebase.js";
import { DataInput } from "./DataInput";
import { DayInput } from "./Graph/Day_graph";
import { WeekInput } from "./Graph/Week_graph";
import { MonthInput } from "./Graph/Month_graph";

import "./Data.scss";

function Data() {
  const [Data, setData] = React.useState([]);
  const [newData, setNewData] = React.useState();
  const [dateFrom, setDateFrom] = React.useState();
  const [dateTo, setDateTo] = React.useState();
  const [timeFrom, setTimeFrom] = React.useState(0);
  const [timeTo, setTimeTo] = React.useState(60 * 60 * 24 - 61);
  let nrBird = [];
  let x = [];
  nrBird = Data;
  const [correctObs, setCorrectObs] = React.useState([{ id: 1 }]);
  const [myButtons, setMyButtons] = React.useState([]);

  let dayOpenNow = -1; //vindu ikke oppe: -1. vindu oppe: 1
  let weekOpenNow = -1;
  let monthOpenNow = -1; //vinduet er til å begynne med ikke oppe

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
  }, []);

  const setTime = () => {
    let intData = [];
    setMyButtons([...myButtons, 1]);

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
        <button className="selectButton" onClick={setWeek}>
          Week
        </button>
        <button className="selectButton" onClick={setMonth}>
          Month
        </button>
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
      </div>
      <div className="Wrapper">
        {myButtons.map(timeInterval => (
          <div className="Card">
            <div className="TheChart" id="chart" key={correctObs.id}>
              {(() => {
                switch (timeInterval) {
                  case 1:
                    return (
                      <DayInput
                        myData={correctObs}
                        timeInterval={timeInterval}
                        dateFrom={dateFrom}
                        dateTo={dateTo}
                        timeFrom={timeFrom} //gi disse en defaultverdi
                        timeTo={timeTo}
                      />
                    );
                  case 2:
                    return (
                      <WeekInput
                        myData={correctObs}
                        timeInterval={timeInterval} //det er i timeinterval 1/2/3 fra button ligger?
                        dateFrom={dateFrom}
                        dateTo={dateTo}
                        timeFrom={timeFrom} //gi disse en defaultverdi
                        timeTo={timeTo}
                      />
                    );
                  case 3:
                    return (
                      <MonthInput
                        myData={correctObs}
                        timeInterval={timeInterval}
                        dateFrom={dateFrom}
                        dateTo={dateTo}
                        timeFrom={timeFrom} //gi disse en defaultverdi
                        timeTo={timeTo}
                      />
                    );
                }
              })()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Data;

//fjernes igjen ved klikk
//kunne legge inn spesifikke start/slutt-tidspunkt. DONE
//Hente fra flere noder, vil at alle noder skal legge seg inn i samme graf (for lettere sammenlign).
