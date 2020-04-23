import React from "react";
import firebase from "../../../../firebase.js";
import { map } from "highcharts";
import "./Status.scss";

// dette elementet sjekker om det har vært en status oppdatering fra nodene i løpet av de sidte 10 minuttene eller så skriver det en feilmelding

function Status({ myData }) {
  const [Data, setData] = React.useState([]);
  const [Data2, setData2] = React.useState([1, 1, 1, 1]);

  React.useEffect(() => {
    //henter ut siste timestamp fra hver node og samenligner not nåtid -10min
    const db = firebase.firestore();
    const intData2 = [];
    for (let i = 0; i < myData.length; i++) {
      db.collection("Unit")
        .doc(myData[i])
        .collection("Status")
        .onSnapshot((snapsshot) => {
          const intData = [];
          snapsshot.forEach((doc) =>
            intData.push({ ...doc.data(), id: doc.id })
          );
          intData2.push({ Node: myData[i], time: intData[0].LastUpdate });

          setData((Data) => [
            ...Data,
            { Node: myData[i], time: intData[0].LastUpdate },
          ]);
        });
    }

    return;
  }, []);
  const notActive = [];
  const Active = [];

  if (myData.length == Data.length) {
    let today = Math.round(new Date().getTime());
    console.log(today);
    for (let i = 0; i < Data.length; i++) {
      if (Data[i].time * 1000 >= today - 60 * 10 * 1000) {
      } else {
        var months_arr = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        var date = new Date(Data[i].time * 1000);

        // Year
        var year = date.getFullYear();

        // Month
        var month = months_arr[date.getMonth()];

        // Day
        var day = date.getDate();

        // Hours
        var hours = date.getHours();

        // Minutes
        var minutes = "0" + date.getMinutes();

        // Seconds
        var seconds = "0" + date.getSeconds();

        // Display date time in MM-dd-yyyy h:m:s format
        var convdataTime =
          day +
          "." +
          month +
          "." +
          year +
          " " +
          hours +
          ":" +
          minutes.substr(-2) +
          ":" +
          seconds.substr(-2);
        notActive.push({ Node: Data[i].Node, time: convdataTime });
      }
    }
    if (notActive.length == 0) {
      Active.push(1);
    }
  }

  return (
    <div className="StatusCard">
      <h3>Status:</h3>
      {notActive.map((mapItem) => (
        <div className="SubCard">
          <div className="NodeLine">
            <p>{mapItem.Node}</p>
            <span class="Circle"></span>
          </div>
          <p>Status: Not responding</p>
          <p> Last response: {mapItem.time}</p>
        </div>
      ))}
      {Active.map((Item) => (
        <div className="SubCard">
          <div className="NodeLine">
            <p>All Nodes active</p>
            <span class="Circle2"></span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Status;
