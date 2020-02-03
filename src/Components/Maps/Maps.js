import React, { Component, useState } from "react";
import "./Maps.scss";
import { Map, GoogleApiWrapper } from "google-maps-react";
import Weather from "../Weather/Weather";
import { getBred, getLeng } from "../../Context";

const mapStyles = {
  width: "80%",
  height: "60%"
};

export class MapContainer extends Component {
  render() {
    return (
      <div className="MyMap">
        <div className="section">
          <Map
            className="maps"
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
              lat: getLeng,
              lng: getBred
            }}
          />
        </div>
      </div>
    );
  }
}

export { getBred, getLeng };

export default GoogleApiWrapper({
  apiKey: "AIzaSyArbzbL-IzJtEaqfRCPuOhP5sMGbsuc2bE"
})(MapContainer);
