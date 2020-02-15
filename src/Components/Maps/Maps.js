import React, { PureComponent, useState } from "react";
import { render } from "react-dom";
import { StaticMap, NavigationControl, GeolocateControl } from "react-map-gl";
import { MapController } from "deck.gl";

import DeckGL from "@deck.gl/react";
import { HeatmapLayer } from "@deck.gl/aggregation-layers";
import "./Maps.scss";
import { mapData } from "./MapData";
// Set your mapbox token here
const MAPBOX_TOKEN =
  "pk.eyJ1Ijoib2xpbWIiLCJhIjoiY2s2NndxaG05MDJkajNqc2RoZDY4bjhjcyJ9.qYYAaBGI80WGqTHL6NrP5A"; // eslint-disable-line
const DATA_URL = mapData;
//"https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/screen-grid/uber-pickup-locations.json"; // eslint-disable-line

const INITIAL_VIEW_STATE = {
  width: 10,
  height: 10,
  longitude: 10.4,
  latitude: 63.41,
  zoom: 12,
  maxZoom: 16,
  pitch: 0,
  bearing: 0
};

//const view = new View({ width: "50%", height: "50%" });

export default class Maps extends PureComponent {
  _renderLayers() {
    const {
      data = DATA_URL,
      intensity = 1,
      threshold = 0.03,
      radiusPixels = 30
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
      })
    ];
  }

  render() {
    const { mapStyle = "mapbox://styles/mapbox/dark-v9" } = this.props;

    return (
      <div className="Maps" style={{ position: "relative" }}>
        <DeckGL
          className="Maps"
          //className="deck"
          initialViewState={INITIAL_VIEW_STATE}
          controller={{ type: MapController, dragRotate: false }}
          layers={this._renderLayers()}
          height="100%"
          width="100%"
          position="relative"
        >
          <StaticMap
            reuseMaps
            mapStyle={mapStyle}
            preventStyleDiffing={true}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            position="absolute"
          ></StaticMap>
        </DeckGL>
      </div>
    );
  }
}

export function renderToDOM(container) {
  render(<Maps />, container);
}
