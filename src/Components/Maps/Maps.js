import React, { useState } from "react";
import ReactMapGL, { GeolocateControl, NavigationControl } from "react-map-gl";
import "./Maps.scss";
import MyMapController from "./Map-controller";

import "mapbox-gl/dist/mapbox-gl.css";
import Weather from "../Weather/Weather";

const TOKEN =
  "pk.eyJ1Ijoib2xpbWIiLCJhIjoiY2s2NndxaG05MDJkajNqc2RoZDY4bjhjcyJ9.qYYAaBGI80WGqTHL6NrP5A";

const geolocateStyle = {
  float: "left",
  margin: "50px",
  padding: "10px"
};

const mapController = new MyMapController();

const Maps = () => {
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: 800,
    latitude: 63.4189,
    longitude: 10.4027,
    zoom: 12
  });

  const _onViewportChange = viewport =>
    setViewPort({ ...viewport, transitionDuration: 1 });

  return (
    <div className="Maps">
      <ReactMapGL
        controller={mapController}
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v8"
        onViewportChange={_onViewportChange}
      >
        <div style={{ position: "absolute", right: 0 }}>
          <NavigationControl visualizePitch={true} />
        </div>
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </ReactMapGL>
    </div>
  );
};

export default Maps;
