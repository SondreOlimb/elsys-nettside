import React from "react";
//import logo from "../Bilder//bird-logos-png.png";

import firebase from "../../firebase.js";
import "./DataViz.scss";

import Compared from "../Default/Elements/Compared";
import MapsNodes from "../Default/Elements/MapsElement/MapsNodes";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
require("highcharts/modules/export-data")(Highcharts);

function DataViz() {
  const [Node, setNode] = React.useState([]);
  React.useEffect(() => {
    const intData2 = [];
    const db = firebase.firestore();
    return db
      .collection("Unit")
      .doc("Nodes")
      .collection("Nodes")
      .onSnapshot(snapsshot => {
        let intData = [];
        snapsshot.forEach(doc => intData.push({ ...doc.data(), id: doc.id }));
        for (var i = 0; i < intData[0].Node.length; i++) {
          intData2.push(intData[0].Node[i]);
        }

        setNode(intData2);
      });
  }, []);

  let myNodes;
  let myCompared;
  let myMaps;
  console.log(Node.length);

  if (Node.length > 0) {
    myMaps = <MapsNodes myData={Node} />;
  } else {
    myMaps = <p>Loading...</p>;
  }

  return <div className="DataViz">{myMaps}</div>;
}

export default DataViz;
