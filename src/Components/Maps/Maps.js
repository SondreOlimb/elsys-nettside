import React, { Component, useState } from "react";
import { render } from "react-dom";
import DeckGL, { ArcLayer, HeatmapLayer, HexagonLayer } from "deck.gl";

import ReactMapGL, {
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  MapState
} from "react-map-gl";
import "./Maps.scss";
import { mapData, mapData2 } from "./MapData";
import "mapbox-gl/dist/mapbox-gl.css";
import firebase from "../../firebase.js";

import { GetMapData } from "./GetMapData.js";

const TOKEN =
  "pk.eyJ1Ijoib2xpbWIiLCJhIjoiY2s2NndxaG05MDJkajNqc2RoZDY4bjhjcyJ9.qYYAaBGI80WGqTHL6NrP5A"; // Set your mapbox token here
const DATA_URL = mapData;

function Maps({ myData }) {
  const [layerData, setData] = React.useState([]);
  const [testData, setTestData] = React.useState(mapData);

  const data = myData;
  const intensity = 1;
  const threshold = 0.03;
  const radiusPixels = 20;

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "70vh",
    latitude: 63.42111,
    longitude: 10.40262,
    zoom: 12
  });

  const [renderLayers, setRenderLayers] = useState([
    new HeatmapLayer({
      data,
      id: "heatmp-layer",
      pickable: false,
      getPosition: d => [d[0], d[1]],
      getWeight: 1,
      radiusPixels,
      intensity,
      threshold
    })
  ]);

  const setLayer = () => {
    setRenderLayers([
      new HexagonLayer({
        id: "hexagon-layer",
        data,
        pickable: true,
        extruded: true,
        radius: 100,
        elevationScale: 3,
        getPosition: d => [d[0], d[1]],
        getWeight: 1,
        radiusPixels,
        intensity,
        threshold

        /* Update tooltip
             http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
          */
      })
    ]);
  };

  return (
    <div className="Maps">
      <ReactMapGL
        {...viewport}
        onViewportChange={setViewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle={"mapbox://styles/mapbox/dark-v9"}
      >
        <DeckGL viewState={viewport} layers={renderLayers} />
        <div style={{ position: "absolute", right: 0 }}>
          <NavigationControl visualizePitch={true} />
          <FullscreenControl container={document.querySelector("#Dashboard")} />
          <GeolocateControl
            //style={geolocateStyle}
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
          <button onClick={setLayer}>T</button>
        </div>
      </ReactMapGL>
    </div>
  );
}

export default Maps;
