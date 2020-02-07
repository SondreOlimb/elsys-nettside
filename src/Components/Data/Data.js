import React, { Component } from "react";
import firebase from "../../firebase.js";
import { DataInput } from "./DataInput";

import "./Data.scss";

function Data() {
  const [Data, setData] = React.useState([]);
  const [newData, setNewData] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("Data").get();
      setData(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  const onCreate = () => {
    const db = firebase.firestore();
    db.collection("Data").add({ Birds: newData });
  };

  return (
    <div className="Data">
      <div className="Card">
        <input
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
      </div>
    </div>
  );
}

export default Data;
