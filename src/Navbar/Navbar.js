import React from "react";
import logo from "../Bilder/bird-logos-png.png";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import firebase from "firebase";

function Navbar() {
  return (
    <div className="Flex-navbar">
      <div className="items-container">
        <Link to="/" className="logolink">
          <img
            alt="pic"
            src={firebase.auth().currentUser.photoURL}
            className="pic"
          />
        </Link>

        <p className="user"> {firebase.auth().currentUser.displayName}</p>
        <button onClick={() => firebase.auth().signOut()} className="signout">
          Sign out
        </button>

        <Link to="/dashboard/" className="Nav-item">
          Dash
        </Link>

        <Link to="/dashboard/maps" className="Nav-item">
          Maps
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
