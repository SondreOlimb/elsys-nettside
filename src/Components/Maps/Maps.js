import React, { useState } from "react";
import MapGL, { GeolocateControl } from "react-map-gl";
import "./Maps.scss";

import "mapbox-gl/dist/mapbox-gl.css";

const TOKEN =
  "pk.eyJ1Ijoib2xpbWIiLCJhIjoiY2s2NndxaG05MDJkajNqc2RoZDY4bjhjcyJ9.qYYAaBGI80WGqTHL6NrP5A";

const geolocateStyle = {
  float: "left",
  margin: "50px",
  padding: "10px"
};

const Maps = () => {
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: 900,
    latitude: 63.4189,
    longitude: 10.4027,
    zoom: 12
  });

  const _onViewportChange = viewport =>
    setViewPort({ ...viewport, transitionDuration: 3000 });

  return (
    <div className="Maps">
      <h1 className="tekst">
        GeoLocator: Click To Find Your Location or click{" "}
        <a href="/search">here</a> to search for a location
      </h1>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v8"
        onViewportChange={_onViewportChange}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </MapGL>
    </div>
  );
};

export default Maps;
