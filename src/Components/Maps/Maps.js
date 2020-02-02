import React, { Component } from "react";
import "./Maps.scss";
import { Map, GoogleApiWrapper } from "google-maps-react";
import Weather from "../Weather/Weather";

const mapStyles = {
  width: "20%",
  height: "30%"
};

export class MapContainer extends Component {
  render() {
    return (
      <div className="MyMap">
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 63.4305,
            lng: 10.3951
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyArbzbL-IzJtEaqfRCPuOhP5sMGbsuc2bE"
})(MapContainer);
