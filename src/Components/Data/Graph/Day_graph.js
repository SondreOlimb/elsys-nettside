import React from "react";
import firebase from "../../../firebase.js";
import "../Data.scss";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

export const DayInput = ({
  nodesToDisplay,
  dict,
  dateFrom,
  dateTo,
  timeFrom,
  timeTo,
}) => {
  let myNode = [];
  let det = [];

  let tittelen = "Day"; //brukes til å sette riktig tittel på grafen
  let typeXakse = "datetime"; //brukes til å få riktig indeksering på x-aksen

  //dette ellementet render en graf med som sammler all data for en node pr dag
  //hvis timeFrom og timeTo ineholder data skal dette tas hensyn til eller ikke.
  //seriesName er navnet på grafhen

  //håndterer dag intervaler
  for (let j = 0; j < nodesToDisplay.length; ++j) {
    let Data = [];
    for (var k = 0; k < dict.length; k++) {
      if (dict[k]["nodeName"] == nodesToDisplay[j]) {
        Data = dict[k]["nodeData"];
      }
    }

    let day = dateFrom * 1000;
    let dayAdd1 = dateFrom * 1000 + 24 * 60 * 60 * 1000;

    while (day <= dateTo * 1000) {
      let countBird = 0;
      for (var i = 0; i < Data.length; i++) {
        const oneDate = Data[i].TimeStamp * 1000;
        if (
          oneDate >= day + timeFrom * 1000 &&
          day + timeTo * 1000 >= oneDate
        ) {
          countBird = countBird + 1;
        }
      }

      det.push([day, countBird]);
      day = dayAdd1;
      dayAdd1 = dayAdd1 + 24 * 60 * 60 * 1000;
    }
    const test = det;
    det = [];
    myNode.push({ name: nodesToDisplay[j], data: test });
  }

  const options = {
    chart: {
      type: "line",
      //width: 900,
      backgroundColor: "#1d1d1d",
      textColor: "#000000",
    },
    xAxis: {
      allowDecimals: false, //vil ikke ha halve dager
      type: typeXakse,
    },
    style: {
      textColor: "#000000",
    },
    title: {
      text: tittelen,
      color: "#000000",
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        },
        enableMouseTracking: true,
      },
    },
    series: myNode,
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
      "#aaeeee",
    ],
    chart: {
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
        stops: [
          [0, "#2a2a2b"],
          [1, "#3e3e40"],
        ],
      },
      style: {
        fontFamily: "'Unica One', sans-serif",
      },
      plotBorderColor: "#606063",
    },
    title: {
      style: {
        color: "#E0E0E3",
        textTransform: "uppercase",
        fontSize: "20px",
      },
    },
    subtitle: {
      style: {
        color: "#E0E0E3",
        textTransform: "uppercase",
      },
    },
    xAxis: {
      gridLineColor: "#707073",
      labels: {
        style: {
          color: "#E0E0E3",
        },
      },
      lineColor: "#707073",
      minorGridLineColor: "#505053",
      tickColor: "#707073",
      title: {
        style: {
          color: "#A0A0A3",
        },
      },
    },
    yAxis: {
      allowDecimals: false, //ingen halve fugler
      gridLineColor: "#707073",
      labels: {
        style: {
          color: "#E0E0E3",
        },
      },
      lineColor: "#707073",
      minorGridLineColor: "#505053",
      tickColor: "#707073",
      tickWidth: 1,
      title: {
        style: {
          color: "#A0A0A3",
        },
      },
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.85)",
      style: {
        color: "#F0F0F0",
      },
    },
    plotOptions: {
      series: {
        dataLabels: {
          color: "#F0F0F3",
          style: {
            fontSize: "13px",
          },
        },
        marker: {
          lineColor: "#333",
        },
      },
      boxplot: {
        fillColor: "#505053",
      },
      candlestick: {
        lineColor: "white",
      },
      errorbar: {
        color: "white",
      },
    },
    legend: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      itemStyle: {
        color: "#E0E0E3",
      },
      itemHoverStyle: {
        color: "#FFF",
      },
      itemHiddenStyle: {
        color: "#606063",
      },
      title: {
        style: {
          color: "#C0C0C0",
        },
      },
    },
    credits: {
      style: {
        color: "#666",
      },
    },
    labels: {
      style: {
        color: "#707073",
      },
    },
    drilldown: {
      activeAxisLabelStyle: {
        color: "#F0F0F3",
      },
      activeDataLabelStyle: {
        color: "#F0F0F3",
      },
    },
    navigation: {
      buttonOptions: {
        symbolStroke: "#DDDDDD",
        theme: {
          fill: "#505053",
        },
      },
    },
    // scroll charts
    rangeSelector: {
      buttonTheme: {
        fill: "#505053",
        stroke: "#000000",
        style: {
          color: "#CCC",
        },
        states: {
          hover: {
            fill: "#707073",
            stroke: "#000000",
            style: {
              color: "white",
            },
          },
          select: {
            fill: "#000003",
            stroke: "#000000",
            style: {
              color: "white",
            },
          },
        },
      },
      inputBoxBorderColor: "#505053",
      inputStyle: {
        backgroundColor: "#333",
        color: "silver",
      },
      labelStyle: {
        color: "silver",
      },
    },
    navigator: {
      handles: {
        backgroundColor: "#666",
        borderColor: "#AAA",
      },
      outlineColor: "#CCC",
      maskFill: "rgba(255,255,255,0.1)",
      series: {
        color: "#7798BF",
        lineColor: "#A6C7ED",
      },
      xAxis: {
        gridLineColor: "#505053",
      },
    },
    scrollbar: {
      barBackgroundColor: "#808083",
      barBorderColor: "#808083",
      buttonArrowColor: "#CCC",
      buttonBackgroundColor: "#606063",
      buttonBorderColor: "#606063",
      rifleColor: "#FFF",
      trackBackgroundColor: "#404043",
      trackBorderColor: "#404043",
    },
  };
  // Apply the theme
  Highcharts.setOptions(Highcharts.theme);

  return (
    <div className="Chart">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        containerProps={{ style: { width: "100%" } }}
      />
    </div>
  );
};
