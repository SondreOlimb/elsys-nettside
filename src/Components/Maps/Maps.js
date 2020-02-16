import React, { Component } from "react";
import { render } from "react-dom";
import DeckGL, { ArcLayer, HeatmapLayer, HexagonLayer } from "deck.gl";

import ReactMapGL, {
  NavigationControl,
  GeolocateControl,
  FullscreenControl
} from "react-map-gl";
import "./Maps.scss";
import { mapData } from "./MapData";
import "mapbox-gl/dist/mapbox-gl.css";

const TOKEN =
  "pk.eyJ1Ijoib2xpbWIiLCJhIjoiY2s2NndxaG05MDJkajNqc2RoZDY4bjhjcyJ9.qYYAaBGI80WGqTHL6NrP5A"; // Set your mapbox token here
const DATA_URL = mapData;

const geolocateStyle = {
  float: "left",
  margin: "50px",
  padding: "10px"
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        longitude: 10.4035,
        latitude: 63.4135,
        zoom: 12,
        bearing: 0,
        pitch: 30
      }
    };
  }

  _renderLayers() {
    const {
      data = DATA_URL,
      intensity = 1,
      threshold = 0.03,
      radiusPixels = 20
    } = this.props;

    return [
      new HeatmapLayer({
        data,
        id: "heatmp-layer",
        pickable: false,
        getPosition: d => [d[0], d[1]],
        getWeight: d => d[2],
        radiusPixels,
        intensity,
        threshold
      }),

      new HexagonLayer({
        id: "hexagon-layer",
        data,
        pickable: true,
        extruded: true,
        radius: 100,
        elevationScale: 3,
        getPosition: d => [d[0], d[1]],
        getWeight: d => d[2],
        radiusPixels,
        intensity,
        threshold

        /* Update tooltip
             http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
          */
      })
    ];
  }

  _onViewportChange = viewport => {
    this.setState({ viewport });
  };

  render() {
    const { viewport } = this.state;
    const { mapStyle = "mapbox://styles/mapbox/dark-v9" } = this.props;

    return (
      <div className="Maps">
        <ReactMapGL
          {...viewport}
          width="100%"
          height="90vh"
          maxPitch={85}
          onViewportChange={this._onViewportChange}
          mapboxApiAccessToken={TOKEN}
          mapStyle={mapStyle}
        >
          <DeckGL viewState={viewport} layers={this._renderLayers()} />
          <div style={{ position: "absolute", right: 0 }}>
            <NavigationControl visualizePitch={true} />
            <FullscreenControl
              container={document.querySelector("#Dashboard")}
            />
            <GeolocateControl
              //style={geolocateStyle}
              positionOptions={{ enableHighAccuracy: true }}
              trackUserLocation={true}
            />
          </div>
        </ReactMapGL>
      </div>
    );
  }
}

export function renderToDom(container) {
  render(<App />, container);
}
