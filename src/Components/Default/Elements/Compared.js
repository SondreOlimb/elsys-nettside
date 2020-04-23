import React from "react";
import firebase from "../../../firebase.js";

import TimeMonth from "./ComparedElements/TimeMonth";

//Dette elmentet henter ut får inn navne på nodene og sender videre at aray med objekter som innholder navn på node og observasjoner

function Compared({ myData, timeInterval, timeFrom, timeTo }) {
  const det = [];
  const [Data, setData] = React.useState([]);

  React.useEffect(() => {
    const db = firebase.firestore();
    for (let i = 0; i < myData.length; i++) {
      const intData2 = [];

      db.collection("Unit")
        .doc(myData[i])
        .collection("Activity")
        .onSnapshot((snapsshot) => {
          let intData = [];
          snapsshot.forEach((doc) =>
            intData.push({ ...doc.data(), id: doc.id })
          );

          setData((Data) => [...Data, { name: myData[i], y: intData }]);
        });
    }
    return;
  }, []);

  let Wait;

  if (Data.length == myData.length) {
    //console.log(Data);
    Wait = <TimeMonth myData={Data} />;
  } else {
    Wait = <p>Loading...</p>;
  }

  return <div className="Chart">{Wait}</div>;
}

export default Compared;
