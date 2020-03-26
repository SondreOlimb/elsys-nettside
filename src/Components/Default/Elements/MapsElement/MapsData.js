import React from "react";
//import firebase from "../../../firebase.js";

import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import Maps from "../../../Maps/Maps";

export default function MapsData({ myData }) {
  const det = [];
  const dateTo = Math.round(new Date().getTime() / 1000);
  const dateFrom = dateTo - 60 * 60 * 24 * 30;

  const [mapsData, setMapsData] = React.useState([]);
  const [nodeInfo, setNodeInfo] = React.useState([]);
  let intData = [];
  let intdata;
  React.useEffect(() => {
    for (let i = 0; i < myData.length; i++) {
      //setData(Data => [...Data, { name: myData[i], y: [] }])
      const intName = myData[i].name;
      const nodeCord = setNodeInfo(nodeInfo => [
        ...nodeInfo,
        { name: intName, nodeCord: myData[i].y[0].Cord }
      ]);

      const length = myData[i].y.length;

      for (let j = 0; j < length; j++) {
        try {
          const intData2 = myData[i].y[j].Cord;
          intData.push([intData2[0], intData2[1], 1]);
        } catch (error) {
          console.error(error);
        }
      }
      //setMapsData(mapsData => [...mapsData, intData]);
    }
    setMapsData(mapsData => [...mapsData, intData]);
  }, []);

  let Wait;
  if (mapsData.length > 0) {
    Wait = <Maps myData={mapsData[0]} nodes={nodeInfo} />;
  } else {
    Wait = "Loading...";
  }

  return <div className="Chart">{Wait}</div>;
}
