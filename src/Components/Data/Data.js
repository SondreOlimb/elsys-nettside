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
    db.collection("Data").add({ Birds: parseInt(newData) });
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
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },
    series: [
      {
        data: x
      }
    ]
  };

  Highcharts.theme = {
    colors: [
      "#2b908f",
      "#90ee7e",
      "#f45b5b",
      "#7798BF",
      "#aaeeee",
      "#ff0066",
      "#eeaaee",
      "#55BF3B",
      "#DF5353",
      "#7798BF",
      "#aaeeee"
    ],
    chart: {
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
        stops: [
          [0, "#2a2a2b"],
          [1, "#3e3e40"]
        ]
      },
      style: {
        fontFamily: "'Unica One', sans-serif"
      },
      plotBorderColor: "#606063"
    },
    title: {
      style: {
        color: "#E0E0E3",
        textTransform: "uppercase",
        fontSize: "20px"
      }
    },
    subtitle: {
      style: {
        color: "#E0E0E3",
        textTransform: "uppercase"
      }
    },
    xAxis: {
      gridLineColor: "#707073",
      labels: {
        style: {
          color: "#E0E0E3"
        }
      },
      lineColor: "#707073",
      minorGridLineColor: "#505053",
      tickColor: "#707073",
      title: {
        style: {
          color: "#A0A0A3"
        }
      }
    },
    yAxis: {
      gridLineColor: "#707073",
      labels: {
        style: {
          color: "#E0E0E3"
        }
      },
      lineColor: "#707073",
      minorGridLineColor: "#505053",
      tickColor: "#707073",
      tickWidth: 1,
      title: {
        style: {
          color: "#A0A0A3"
        }
      }
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.85)",
      style: {
        color: "#F0F0F0"
      }
    },
    plotOptions: {
      series: {
        dataLabels: {
          color: "#F0F0F3",
          style: {
            fontSize: "13px"
          }
        },
        marker: {
          lineColor: "#333"
        }
      },
      boxplot: {
        fillColor: "#505053"
      },
      candlestick: {
        lineColor: "white"
      },
      errorbar: {
        color: "white"
      }
    },
    legend: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      itemStyle: {
        color: "#E0E0E3"
      },
      itemHoverStyle: {
        color: "#FFF"
      },
      itemHiddenStyle: {
        color: "#606063"
      },
      title: {
        style: {
          color: "#C0C0C0"
        }
      }
    },
    credits: {
      style: {
        color: "#666"
      }
    },
    labels: {
      style: {
        color: "#707073"
      }
    },
    drilldown: {
      activeAxisLabelStyle: {
        color: "#F0F0F3"
      },
      activeDataLabelStyle: {
        color: "#F0F0F3"
      }
    },
    navigation: {
      buttonOptions: {
        symbolStroke: "#DDDDDD",
        theme: {
          fill: "#505053"
        }
      }
    },
    // scroll charts
    rangeSelector: {
      buttonTheme: {
        fill: "#505053",
        stroke: "#000000",
        style: {
          color: "#CCC"
        },
        states: {
          hover: {
            fill: "#707073",
            stroke: "#000000",
            style: {
              color: "white"
            }
          },
          select: {
            fill: "#000003",
            stroke: "#000000",
            style: {
              color: "white"
            }
          }
        }
      },
      inputBoxBorderColor: "#505053",
      inputStyle: {
        backgroundColor: "#333",
        color: "silver"
      },
      labelStyle: {
        color: "silver"
      }
    },
    navigator: {
      handles: {
        backgroundColor: "#666",
        borderColor: "#AAA"
      },
      outlineColor: "#CCC",
      maskFill: "rgba(255,255,255,0.1)",
      series: {
        color: "#7798BF",
        lineColor: "#A6C7ED"
      },
      xAxis: {
        gridLineColor: "#505053"
      }
    },
    scrollbar: {
      barBackgroundColor: "#808083",
      barBorderColor: "#808083",
      buttonArrowColor: "#CCC",
      buttonBackgroundColor: "#606063",
      buttonBorderColor: "#606063",
      rifleColor: "#FFF",
      trackBackgroundColor: "#404043",
      trackBorderColor: "#404043"
    }
  };
  // Apply the theme
  Highcharts.setOptions(Highcharts.theme);

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
