import React from "react";
import logo from "../Bilder/profile.jpg";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import firebase from "../firebase";
import ReactMapGL, {
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
} from "react-map-gl";

//dette er navigajsons elementet på venstre side på mypage
//link brukes til til å bytte mellom elementer med router i dashboard elementet

function Navbar() {
  var img = new Image();

  if (firebase.auth().currentUser.photoURL) {
    img.src = firebase.auth().currentUser.photoURL; //henter bilde til profilen som er logget inn
  } else {
    img.src = logo; //hvis bilde ikke eksisterer brukes et sandard bilde
  }
  return (
    <div className="Flex-navbar">
      <div className="items-container">
        <div className="seperator">
          <Link to="/" className="logolink">
            <img alt="pic" src={img.src} className="pic" />
          </Link>
          {
            //henter fram naven til brukeren og lager en utlogings knapp.
          }

          <p className="user"> {firebase.auth().currentUser.displayName}</p>

          <button onClick={() => firebase.auth().signOut()} className="signout">
            Sign out
          </button>

          <Link to="/dashboard/" className="Nav-item">
            <span className="tooltip">
              This element gives an overview off all the nodes.
            </span>
            Dash
          </Link>

          <Link to="/dashboard/maps" className="Nav-item">
            Maps
            <span className="tooltip">
              Map of all the activity on all the Nodes.
            </span>
          </Link>
          <Link to="/dashboard/data" className="Nav-item">
            Data
            <span className="tooltip">
              Request data for a given time intervall.
            </span>
          </Link>
        </div>
        <div className="seperator">
          <div className="Nav-item">
            <div className="full">
              <FullscreenControl
                container={document.querySelector("#Dashboard")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
