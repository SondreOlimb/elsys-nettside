import React from "react";
import firebase from "../../firebase.js";
import "./Data.scss";

export const DataInput = ({ myData }) => {
  const [Bird, setBird] = React.useState(myData.Bird);

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection("Unit")
      .doc("Node1")
      .collection("Activity")
      .doc(myData.id)
      .set({ ...myData, Bird });
  };

  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("Unit")
      .doc("Node1")
      .collection("Activity")
      .doc(myData.id)
      .delete();
  };

  return (
    <div className="Bird">
      <div className="BirdCount">
        <h3 className="counter">Bird: </h3>
      </div>
      <div className="BirdCount">
        <input
          className="dataBar"
          value={Bird}
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
