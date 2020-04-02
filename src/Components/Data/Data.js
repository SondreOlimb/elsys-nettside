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
  const [chosenNode, setChosenNode] = React.useState([]);
  const [dayNodesToDisplay, setDayNodesToDisplay] = React.useState([]); 
  const [weekNodesToDisplay, setWeekNodesToDisplay] = React.useState([]);
  const [monthNodesToDisplay, setMonthNodesToDisplay] = React.useState([]);
  let nrBird = [];
  let x = [];
  nrBird = Data;
  const [correctObs, setCorrectObs] = React.useState([{ id: 1 }]);
  const [myButtons, setMyButtons] = React.useState([]);

  let dayChart; 
  let weekChart;
  let monthChart; 

  for (var i = 0; i < nrBird.length; i++) {
    x.push(parseInt(Data[i].Bird));
    //Do something
  }

  const nodene = ["Node1", "Node2", "Node3"]; 
  
  const [dict, setDict] = React.useState([]);
  React.useEffect(() => {
    const db = firebase.firestore();
    for (let i = 0; i < nodene.length; i++) {
      db.collection("Unit")
        .doc(nodene[i])
        .collection("Activity")
        .onSnapshot(snapsshot => {
          let intData = [];
          snapsshot.forEach(doc => intData.push({ ...doc.data(), id: doc.id }));
          setDict(dict => [...dict, {nodeName: nodene[i], nodeData: intData}]);
        });
    }
    return;
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
    setDayNodesToDisplay([...dayNodesToDisplay, chosenNode]); //add the chosenNode to the existing array of nodes to display
    if (dayChart){
      setMyButtons([...myButtons, 0]);
    }
    else{
      setMyButtons([...myButtons, 1]);
    }
  };
  const setWeek = () => {
    //setMyButtons([...myButtons, 2]);
    setWeekNodesToDisplay([...weekNodesToDisplay, chosenNode]);
    if (weekChart){
      setMyButtons([...myButtons, 0]);
    }
    else{
      setMyButtons([...myButtons, 2]);
    }
  };
  const setMonth = () => {
    setMonthNodesToDisplay([...monthNodesToDisplay, chosenNode]);
    if (monthChart){
      setMyButtons([...myButtons, 0]);
    }
    else{
      setMyButtons([...myButtons, 3]);
    }
//    setMyButtons([...myButtons, 3]);
  };

  var options;
  var options2 = [];
  if (true) {
    const startOption = <option value= {"None"} >Choose a node</option>; //i tilfelle noen velger tilbake til "Choose a node" er value her satt til Node1
    options2.push(startOption);
    for (var i = 0; i < 3; i++){
      options = <option value= {nodene[i]} >Node {i+1}</option>;
      options2.push(options);
    }
  }
  console.log(options2);

  const handleChangedNode = (event) => {
    setChosenNode(event.target.value);
  }

  return (
    <div className="Data">
      <div className="Dato">
        <div className="datoBoks">
          <label for="Node">Choose a node:</label>

          <select className="nodeSelect" id="Node" onChange={e => handleChangedNode(e)}>
            {options2}
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
                    dayChart= (
                      <DayInput
                        //myData={correctObs}
                        nodesToDisplay = {dayNodesToDisplay}
                        dict = {dict}
                        chosenNode = {chosenNode}
                        timeInterval={timeInterval}
                        dateFrom={dateFrom}
                        dateTo={dateTo}
                        timeFrom={timeFrom} //gi disse en defaultverdi
                        timeTo={timeTo}
                      />
                    );
                    return dayChart;
                  case 2:
                      weekChart= (<WeekInput
                        //myData={correctObs}
                        nodesToDisplay = {weekNodesToDisplay}
                        dict = {dict}
                        chosenNode = {chosenNode}
                        timeInterval={timeInterval} //det er i timeinterval 1/2/3 fra button ligger?
                        dateFrom={dateFrom}
                        dateTo={dateTo}
                        timeFrom={timeFrom} 
                        timeTo={timeTo}
                      />
                    );
                    return weekChart;
                  case 3:
                    monthChart= (
                      <MonthInput
                        //myData={correctObs}
                        nodesToDisplay = {monthNodesToDisplay}
                        dict = {dict}
                        chosenNode = {chosenNode}
                        timeInterval={timeInterval}
                        dateFrom={dateFrom}
                        dateTo={dateTo}
                        timeFrom={timeFrom} 
                        timeTo={timeTo}
                      />
                    );
                    return monthChart;
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
//Hente fra flere noder, vil at alle noder skal legge seg inn i samme graf (for lettere sammenlign). DONE
