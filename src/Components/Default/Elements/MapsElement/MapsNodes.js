import React from "react";
import firebase from "../../../../firebase";

import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import MapsData from "./MapsData";

function MapsNodes({ myData, timeInterval, timeFrom, timeTo }) {
  const det = [];
  const [Data, setData] = React.useState([]);

  React.useEffect(() => {
    const db = firebase.firestore();
    for (let i = 0; i < myData.length; i++) {
      db.collection("Unit")
        .doc(myData[i])
        .collection("Activity")
        .onSnapshot(snapsshot => {
          let intData = [];
          snapsshot.forEach(doc => intData.push({ ...doc.data(), id: doc.id }));

          setData(Data => [...Data, { name: myData[i], y: intData }]);
        });
    }
    return;
  }, []);

  let Wait;

  if (Data.length == myData.length) {
    console.log(Data);
    Wait = <MapsData myData={Data} />;
  } else {
    Wait = <p>Loading</p>;
  }

  return <div className="Chart">{Wait}</div>;
}

export default MapsNodes;
