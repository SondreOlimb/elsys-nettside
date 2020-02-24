import React from "react";
//import firebase from "../../../firebase.js";

import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { Chart } from "./Chart";

export default function TimeMonth({ myData }) {
  const det = [];
  const dateTo = Math.round(new Date().getTime() / 1000);
  const dateFrom = dateTo - 60 * 60 * 24 * 30;
  console.log(dateTo);
  console.log(dateFrom);
  const [timeData, setTimeData] = React.useState([]);
  let intData = [];

  React.useEffect(() => {
    for (let i = 0; i < myData.length; i++) {
      //setData(Data => [...Data, { name: myData[i], y: [] }])
      const intName = myData[i].name;
      const length = myData[i].y.length;
      intData = [];
      for (let j = 0; j < length; j++) {
        try {
          if (
            myData[i].y[j].TimeStamp >= dateFrom &&
            myData[i].y[j].TimeStamp <= dateTo
          ) {
            intData.push(myData[i].y[j].TimeStamp);
          }
        } catch (error) {
          console.error(error);
        }
      }
      //console.log(myData.length);

      setTimeData(timeData => [...timeData, { name: intName, y: intData }]); //det er her feielen ligger
    }
  }, []);

  //console.log(timeData);

  //<Chart myData={Data} timeFrom={dateFrom} timeTo={dateTo} />
  let Wait;
  if (timeData.length == myData.length) {
    Wait = <Chart myData={timeData} timeFrom={dateFrom} timeTo={dateTo} />;
  } else {
    Wait = "Loading...";
  }

  return <div className="Chart">{Wait}</div>;
}
