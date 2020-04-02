import React from "react";
import firebase from "../../firebase.js";
import { DayInput } from "./Graph/Day_graph";
import { WeekInput } from "./Graph/Week_graph";
import { MonthInput } from "./Graph/Month_graph";

import "./Data.scss";

function Data() {
  const [dateFrom, setDateFrom] = React.useState();
  const [dateTo, setDateTo] = React.useState();
  const [timeFrom, setTimeFrom] = React.useState(0);
  const [timeTo, setTimeTo] = React.useState(60 * 60 * 24 - 61);
  
  const [chosenNode, setChosenNode] = React.useState([]);
  const [dayNodesToDisplay, setDayNodesToDisplay] = React.useState([]); 
  const [weekNodesToDisplay, setWeekNodesToDisplay] = React.useState([]);
  const [monthNodesToDisplay, setMonthNodesToDisplay] = React.useState([]);
  
  const [myButtons, setMyButtons] = React.useState([]);
  
  

  //Values that indicate if the chart is open
  let dayChart;
  let weekChart;
  let monthChart; 

  const nodene = ["Node1", "Node2", "Node3"]; //The name of the users nodes.
  
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

  

  const setDay = () => {
    setDayNodesToDisplay([...dayNodesToDisplay, chosenNode]); //add the chosenNode to the existing array of nodes to display
    if(!dayChart){
      setMyButtons([...myButtons, 1]);
      document.querySelector('#SetDayBtn').innerHTML = "Add to day-chart"; //update the button-text
    }
  };
  const clearDay = () =>{
    if (dayChart){
      document.querySelector('#SetDayBtn').innerHTML = "Create day-chart"; //change the button-text back
      setDayNodesToDisplay([]);
      var array = [];
      for (var i = 0; i<myButtons.length; ++i){
        if (myButtons[i] !== 1){
          array.push(myButtons[i]);
        }
      }
      setMyButtons(array);
    }
  };
  const setWeek = () => {
    setWeekNodesToDisplay([...weekNodesToDisplay, chosenNode]);
    if (!weekChart){
      setMyButtons([...myButtons, 2]);
      document.querySelector('#SetWeekBtn').innerHTML = "Add to week-chart";
    }
  };
  const clearWeek = () =>{
    if (weekChart){
      document.querySelector('#SetWeekBtn').innerHTML = "Create week-chart";
      setWeekNodesToDisplay([]);
      var array = [];
      for (var i = 0; i<myButtons.length; ++i){
        if (myButtons[i] !== 2){
          array.push(myButtons[i]);
        }
      }
      setMyButtons(array);
    }
  };
  const setMonth = () => {
    setMonthNodesToDisplay([...monthNodesToDisplay, chosenNode]);
    if (!monthChart){
      setMyButtons([...myButtons, 3]);
      document.querySelector('#SetMonthBtn').innerHTML = "Add to month-chart";
    }
  };
  const clearMonth = () =>{
    if (monthChart){
      document.querySelector('#SetMonthBtn').innerHTML = "Create month-chart";
      setMonthNodesToDisplay([]);
      var array = [];
      for (var i = 0; i<myButtons.length; ++i){
        if (myButtons[i] !== 3){
          array.push(myButtons[i]);
        }
      }
      setMyButtons(array);
    }
  };


  var options;
  var options2 = [];
  const startOption = <option value= {"None"} >Choose a node</option>;
  options2.push(startOption);
  for (var i = 0; i < 3; i++){
      options = <option value= {nodene[i]} >Node {i+1}</option>;
      options2.push(options);
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
      </div>
      <div className="selectButtons">
        <button className="selectButton" id="SetDayBtn" onClick={setDay}>
          Create day-chart
        </button>
        <button className="selectButton" onClick={clearDay}>
          Delete day-chart
        </button>
        <button className="selectButton" id="SetWeekBtn" onClick={setWeek}>
          Create week-chart
        </button>
        <button className="selectButton" onClick={clearWeek}>
          Delete week-chart
        </button>
        <button className="selectButton" id="SetMonthBtn" onClick={setMonth}>
          Create month-chart
        </button>
        <button className="selectButton" onClick={clearMonth}>
          Delete month-chart
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
            <div className="TheChart" id="chart">
              {(() => {
                switch (timeInterval) { //det er i timeinterval 1/2/3 fra button ligger
                  case 1:
                    dayChart= (
                      <DayInput
                        nodesToDisplay = {dayNodesToDisplay}
                        dict = {dict}
                        dateFrom={dateFrom}
                        dateTo={dateTo}
                        timeFrom={timeFrom}
                        timeTo={timeTo}
                      />
                    );
                    return dayChart;
                  case 2:
                      weekChart= (<WeekInput
                        nodesToDisplay = {weekNodesToDisplay}
                        dict = {dict}
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
                        nodesToDisplay = {monthNodesToDisplay}
                        dict = {dict}
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

//fjernes igjen ved klikk. DONE
//kunne legge inn spesifikke start/slutt-tidspunkt. DONE
//Hente fra flere noder, vil at alle noder skal legge seg inn i samme graf (for lettere sammenlign). DONE
