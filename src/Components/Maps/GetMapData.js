import React from "react";
import firebase from "../../firebase.js";
import Data from "../Data/Data.js";
import { mapData } from "./MapData";

//let myData = mapData;

export function GetMapData({ myData }) {
  const [mapData, setData] = React.useState([]);
  const ret = 0;
  //let myData = [];

  React.useEffect(() => {
    const db = firebase.firestore();
    return db
      .collection("Unit")
      .doc("Node2")
      .collection("Activity")
      .onSnapshot(snapsshot => {
        const intData = [];
        snapsshot.forEach(doc => intData.push({ ...doc.data(), id: doc.id }));
        //myData = [];
        for (let i = 0; i < intData.length; i++) {
          myData.push(intData[i].Cord);
        }

        setData(intData);
      });
  }, []);

  //return myData;
}
