import React from "react";
import firebase from "../../../../firebase.js";

function Status({ myData }) {
  const [Data, setData] = React.useState([]);

  React.useEffect(() => {
    const db = firebase.firestore();
    let intData2 = [];
    for (let i = 0; i < myData.length; i++) {
      db.collection("Unit")
        .doc(myData[i])
        .collection("Status")
        .onSnapshot(snapsshot => {
          let intData = [];
          snapsshot.forEach(doc => intData.push({ ...doc.data(), id: doc.id }));
          intData2.push(intData);
        });
    }

    setData(intData2);

    return;
  }, []);

  return <div>Sucsess</div>;
}

export default Status;
