import React from "react";
import firebase from "../../firebase.js";
import "./Data.scss";

export const DataInput = ({ myData }) => {
  const [Birds, setBird] = React.useState(myData.Birds);

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection("Data")
      .doc(myData.id)
      .set({ ...myData, Birds });
  };

  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("Data")
      .doc(myData.id)
      .delete();
  };

  return (
    <div className="Bird">
      <div className="BirdCount">
        <h3 className="counter">Birds: </h3>
      </div>
      <div className="BirdCount">
        <input
          className="dataBar"
          value={Birds}
          onChange={e => {
            setBird(e.target.value);
          }}
        />
        <button className="dataButton" onClick={onUpdate}>
          Update
        </button>
        <button className="dataButton" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
