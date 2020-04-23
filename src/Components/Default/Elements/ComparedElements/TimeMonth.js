import React from "react";
//import firebase from "../../../firebase.js";

import { Chart } from "./Chart";
// dette elemntet finner alle registrerte aktiviteter forn de siste 30 dagene
//sender det videre til Chart filen som lager et linjediagram med aktiviteten

export default function TimeMonth({ myData }) {
  const det = [];
  const dateTo = Math.round(new Date().getTime() / 1000);
  const dateFrom = dateTo - 60 * 60 * 24 * 30; //30 dager tilbake fra nåtid i unix time

  const [timeData, setTimeData] = React.useState([]);
  let intData = [];

  React.useEffect(() => {
    for (let i = 0; i < myData.length; i++) {
      const intName = myData[i].name;

      const length = myData[i].y.length;

      intData = [];
      for (let j = 0; j < length; j++) {
        try {
          if (
            Math.round(myData[i].y[j].TimeStamp) >= dateFrom &&
            Math.round(myData[i].y[j].TimeStamp) <= dateTo
          ) {
            intData.push(myData[i].y[j].TimeStamp);
          }
        } catch (error) {
          console.error(error);
        }
      }
      const intData2 = intData;

      setTimeData((timeData) => [...timeData, { name: intName, y: intData2 }]);
    }
  }, []);

  let Wait;
  if (timeData.length == myData.length) {
    //sjekker alle nodene har blitt sjekket for aktivitet

    Wait = <Chart myData={timeData} timeFrom={dateFrom} timeTo={dateTo} />;
  } else {
    Wait = "Loading...";
  }

  return <div className="Chart">{Wait}</div>;
}
