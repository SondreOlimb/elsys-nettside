import React, { Component } from "react";
import firebase from "../../firebase.js";
import { DataInput } from "./DataInput";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

import "./Data.scss";

function Data() {
  const [Data, setData] = React.useState([]);
  const [newData, setNewData] = React.useState();
  let nrBird = [];
  let x = [];
  nrBird = Data;
  console.log(newData);

  for (var i = 0; i < nrBird.length; i++) {
    x.push(parseInt(Data[i].Birds));
    //Do something
  }

  React.useEffect(() => {
    const db = firebase.firestore();
    return db.collection("Data").onSnapshot(snapsshot => {
      const intData = [];
      snapsshot.forEach(doc => intData.push({ ...doc.data(), id: doc.id }));
      setData(intData);
    });

    //const data = await db.collection("Data").get();
    //setData(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  }, []);

  const onCreate = () => {
    const db = firebase.firestore();
    db.collection("Data").add({ Birds: newData });
  };
  const y = x;

  const options = {
    chart: {
      backgroundColor: "#1d1d1d",
      textColor: "#000000"
    },
    style: {
      width: "200px",
      textColor: "#000000"
    },
    title: {
      text: "Birds",
      color: "#000000"
    },
    series: [
      {
        data: x
      }
    ]
  };

  return (
    <div className="Data">
      <div className="Card">
        <input
          type="number"
          className="dataBar"
          value={newData}
          onChange={e => setNewData(e.target.value)}
        />
        <button className="dataButton" onClick={onCreate}>
          Creat
        </button>
        {Data.map(myData => (
          <div key={myData.Birds}>
            <DataInput myData={myData} />
          </div>
        ))}

        <h3 className="counter">Total Birds: {Data.length}</h3>
      </div>
      <div className="Card">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}

export default Data;
