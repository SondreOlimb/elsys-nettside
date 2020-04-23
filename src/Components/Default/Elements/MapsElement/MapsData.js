import React from "react";
//import firebase from "../../../firebase.js";

import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import Maps from "../../../Maps/Maps";

// dette elemntet tar inn data fra mapsNodes, henter ut koordinatene til alle observasjonene og sender dette videre til MAPS elemntet under maps

export default function MapsData({ myData }) {
  const det = [];

  const [mapsData, setMapsData] = React.useState([]);
  const [nodeInfo, setNodeInfo] = React.useState([]);
  let intData = [];
  let intdata;
  React.useEffect(() => {
    for (let i = 0; i < myData.length; i++) {
      //setData(Data => [...Data, { name: myData[i], y: [] }])
      const intName = myData[i].name;
      const nodeCord = setNodeInfo((nodeInfo) => [
        //dette elementet gir info om koordinatene til nodene
        ...nodeInfo,
        { name: intName, nodeCord: myData[i].y[0].Cord },
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
    }
    setMapsData((mapsData) => [...mapsData, intData]); //her lagres koordinantene til hver observasjon.
  }, []);

  let Wait;
  if (mapsData.length > 0) {
    Wait = <Maps myData={mapsData[0]} nodes={nodeInfo} />; //kaller på maps elementet for å rendere et kart
  } else {
    Wait = "Loading...";
  }

  return <div className="Chart">{Wait}</div>;
}
