import React from "react";
import firebase from "../../firebase.js";
import "./Data.scss";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
//import getMonth from 'date-fns/get_month'

export const DataInput = ({ myData, timeInterval, timeFrom, timeTo }) => {
  const det = [];

  let tittelen; //brukes til å sette riktig tittel på grafen
  let typeXakse; //brukes til å få riktig indeksering på x-aksen
  let isMonth = false;

  const date = new Date(1313564400000);
  const month = date.getMonth();

  //try {
  if (timeInterval == 1) {
    //håndterer dag intervaler
    tittelen = "dager";
    typeXakse = "datetime";
    let day = timeFrom * 1000;
    let dayAdd1 = timeFrom * 1000 + 24 * 60 * 60 * 1000;

    while (day <= timeTo * 1000) {
      let countBird = 0;
      for (var i = 0; i < myData.length; i++) {
        //const oneBird = myData[i].Bird;
        const oneDate = myData[i].TimeStamp * 1000;

        if (oneDate >= day && dayAdd1 >= oneDate) {
          countBird = countBird + 1;
        }
      }

      det.push([day, countBird]);
      day = dayAdd1;
      dayAdd1 = dayAdd1 + 24 * 60 * 60 * 1000;
    }
  }
  //} catch (e) {
  //  console.log("error");
  //}

  if (timeInterval == 2) {
    //håndterer ukesintervaller

    tittelen = "uker";
    typeXakse = "linear";

    function getWeekNumber(date) {
      //ikke sikker på om denne funker for alle edgecaser
      var d = new Date(+date);
      d.setHours(0, 0, 0);
      d.setDate(d.getDate() + 4 - (d.getDay() || 7));
      return Math.ceil(
        ((d - new Date(d.getFullYear(), 0, 1)) / 8.64e7 + 1) / 7
      );
    }

    var day = timeFrom * 1000;
    var dayAdd1 = day + 24 * 60 * 60 * 1000;

    while (day <= timeTo * 1000) {
      //så lenge starten av uken er inne i ønsket intervall
      var uke = getWeekNumber(day);
      var birdCounting = 0;
      while (getWeekNumber(day) == uke && day <= timeTo * 1000) {
        //så lenge dagen vi ser på fortsatt er inne i samme uke og i gyldighetsområdet
        for (var i = 0; i < myData.length; ++i) {
          const oneDate = myData[i].TimeStamp * 1000;
          if (oneDate >= day && dayAdd1 >= oneDate) {
            ++birdCounting; // øker tellevariabelen med 1
          }
        }
        day = dayAdd1; //ser på neste dag
        dayAdd1 += 24 * 60 * 60 * 1000; //øker neste dag med en
      }
      det.push([uke, birdCounting]);
    }
  }

  if (timeInterval == 3) {
    //håndterer måned-intervaler
    tittelen = "month";
    typeXakse = "category";
    isMonth = true;

    let day = timeFrom * 1000;
    let dayAdd1 = timeFrom * 1000 + 24 * 60 * 60 * 1000;

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    while (day <= timeTo * 1000) {
      const date = new Date(day);
      var monthNum = date.getMonth();
      let countBird = 0;
      var dato = new Date(day);
      while (dato.getMonth() == monthNum && day <= timeTo * 1000) {
        //så lenge dagen vi ser på fortsatt er inne i samme måned og i gyldighetsområdet
        for (var i = 0; i < myData.length; ++i) {
          const oneDate = myData[i].TimeStamp * 1000;
          if (oneDate >= day && dayAdd1 >= oneDate) {
            ++countBird; // øker tellevariabelen med 1
          }
        }
        day = dayAdd1; //ser på neste dag
        dayAdd1 += 24 * 60 * 60 * 1000; //øker neste dag med en
        dato = new Date(day);
      }
      det.push([monthNames[monthNum], countBird]);
    }
  }

  const options = {
    chart: {
      type: "line",
      //width: 900,
      backgroundColor: "#1d1d1d",
      textColor: "#000000"
    },
    xAxis: {
      allowDecimals: false, //vil ikke ha halve uker
      type: typeXakse
    },
    style: {
      textColor: "#000000"
    },
    title: {
      //text: "Birds",
      text: tittelen,
      color: "#000000"
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: true
      }
    },
    series: [
      {
        name: "Bird activity",
        data: det
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
      allowDecimals: false, //ingen halve fugler
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
    <div className="Chart">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        containerProps={{ style: { width: "100%" } }}
      />
    </div>
  );
};
