import React, { Component, useState } from "react";
import { Deck } from "@deck.gl/core";
import { render } from "react-dom";
import DeckGL, { HeatmapLayer, HexagonLayer, Viewport } from "deck.gl";

//Dette elemntet renderer kartet .

import ReactMapGL, {
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  Marker,
} from "react-map-gl";
import "./Maps.scss";
import { mapData, mapData2 } from "./MapData";
import "mapbox-gl/dist/mapbox-gl.css";
import firebase from "../../firebase.js";

const TOKEN =
  "pk.eyJ1Ijoib2xpbWIiLCJhIjoiY2s2NndxaG05MDJkajNqc2RoZDY4bjhjcyJ9.qYYAaBGI80WGqTHL6NrP5A"; // Set your mapbox token here
const DATA_URL = mapData;

function Maps({ myData, nodes }) {
  const [layerData, setData] = React.useState([]);
  const [testData, setTestData] = React.useState(mapData);

  const data = myData;
  const intensity = 1;
  const threshold = 0.03;
  const radiusPixels = 20;
  const elevationScale = { min: 1, max: 50 };

  const [viewport, setViewport] = useState({
    //bestemmer størrelsen for kartet og hvor "kamrat" skal plaseres
    width: "100%",
    height: "70vh",
    latitude: 63.42111,
    longitude: 10.40262,
    zoom: 12,
  });
  console.log(nodes);

  const [renderLayers, setRenderLayers] = useState([
    new HeatmapLayer({
      // dette element renderer et varmekart ut av dataen vi my data
      data,
      id: "heatmp-layer",
      pickable: false,
      getPosition: (d) => [d[0], d[1]],
      getWeight: 1,
      radiusPixels,
      intensity,
      threshold,
      pickable: true,
      autoHighlight: true,
    }),
  ]);
  console.log(myData);

  const [Dimension, setDimension] = useState("3D"); //en sate som lagrer om vi er di 3d eller 2d

  const onClickMap = () => {
    console.log("test");
  };

  const setLayer = () => {
    // hvis man trykker på 2D/3D kanpper hånderer denne dette.
    if (Dimension == "3D") {
      //
      setDimension("2D");

      setViewport({ ...viewport, pitch: 40.5 });

      setRenderLayers([
        new HexagonLayer({
          //dette elementet renderer varmekartet i 3D
          id: "hexagon-layer", //valg av hexagon visualisering som gir oss et 3d varmekart
          data,
          pickable: true,
          extruded: true,
          radius: 100, //størrelsen på det hexagone lagere
          elevationScale: 3,
          getPosition: (d) => [d[0], d[1]],
          getWeight: 1,
          radiusPixels,
          intensity,
          threshold,
          pickable: true,
          autoHighlight: true,
        }),
      ]);
    } else {
      setViewport({ ...viewport, pitch: 0 });
      setRenderLayers([
        new HeatmapLayer({
          data,
          id: "heatmp-layer",
          pickable: false,
          elevationRange: [0, 3000],
          getPosition: (d) => [d[0], d[1]],
          getWeight: 1,
          radiusPixels,
          intensity,
          threshold,
          pickable: true,
          autoHighlight: true,
          onHover: (info) => "hello",
        }),
      ]);
      setDimension("3D");
    }
  };
  const Wait = [];
  for (let i = 0; i < nodes.length; i++) {
    //Lager en marker for alle nodene, hvor navn og kordinater presenteres
    Wait.push(
      <Marker
        latitude={nodes[i].nodeCord[1]}
        longitude={nodes[i].nodeCord[0]}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <div className="nodeMarker">
          <span className="tooltip">
            <h3>{nodes[i].name}</h3>
            <p>Lat: {nodes[i].nodeCord[1]} </p>
            <p>Long: {nodes[i].nodeCord[0]} </p>
          </span>
        </div>
      </Marker>
    );
  }

  return (
    <div className="Maps">
      <ReactMapGL //renderer kartet
        {...viewport} // henter i vieport elementet
        onViewportChange={setViewport} // enderer på viewport vis bruker beveger på kart
        mapboxApiAccessToken={TOKEN} // adgangstogen til mapbox
        mapStyle={"mapbox://styles/mapbox/dark-v9"} // velger stylen på kartet
        onClick={onClickMap}
      >
        <DeckGL viewState={viewport} layers={renderLayers} />{" "}
        {
          //rendrer heatmapet
        }
        <div style={{ position: "absolute", right: 0 }}>
          <NavigationControl visualizePitch={true} />
          <FullscreenControl container={document.querySelector("#Dashboard")} />
          <GeolocateControl
            //style={geolocateStyle}
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
          <button className="dimButton" onClick={setLayer}>
            {
              Dimension // en knapp som endrer mellom 2d og 3d visualisering
            }
          </button>
        </div>
        {
          Wait // setter inn Marker
        }
      </ReactMapGL>
    </div>
  );
}

export default Maps;
