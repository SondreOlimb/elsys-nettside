import React, { Component, useState } from "react";
import "./Dashboard.scss";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Navbar from "../Navbar/Navbar";
import Maps from "../Components/Maps/Maps";

firebase.initializeApp({
  apiKey: "AIzaSyArbzbL-IzJtEaqfRCPuOhP5sMGbsuc2bE",
  authDomain: "elsys-266317.firebaseapp.com"
});

class Dashboard extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,

      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  };

  render() {
    return (
      <div className="Dashboard">
        {this.state.isSignedIn ? (
          <span className="Dash">
            <div>
              <Navbar />
            </div>
            <div className="screen">
              <div className="Element">
                <Maps className="Maps"></Maps>
              </div>
              <div className="Element">
                <h2>Data</h2>
                <p>noe data</p>
              </div>

              <li className="Element">
                <iframe
                  width="320"
                  height="280"
                  title="sandman"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                ></iframe>
              </li>
            </div>
          </span>
        ) : (
          <span className="signin">
            <h1>Sign in to se your Dashboard</h1>
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </span>
        )}
      </div>
    );
  }
}

export default Dashboard;
