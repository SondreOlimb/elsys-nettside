import React from "react";
import logo from "../Bilder/bird-logos-png.png";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import firebase from "firebase";

function Navbar() {
  return (
    <ul className="Flex-navbar">
      <li className="logo">
        <Link to="/" className="logolink">
          <img
            alt="pic"
            src={firebase.auth().currentUser.photoURL}
            className="pic"
          />
        </Link>
      </li>

      <li className="items-container">
        <p className="user"> {firebase.auth().currentUser.displayName}</p>
        <button onClick={() => firebase.auth().signOut()} className="signout">
          Sign out!
        </button>
        <Link to="/" className="Nav-item">
          Maps
        </Link>

        <Link to="/about" className="Nav-item">
          About
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
