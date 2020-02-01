import React, { Component, useState } from "react";
import "./Dashboard.scss";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Navbar from "../Navbar/Navbar";
import Maps from "../Components/Maps/Maps";
import Default from "../Components/Default/Default";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

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
<<<<<<< HEAD
          <div className="Dash">
            <Router>
              <div className="navbar">
                <Navbar />
=======
          <span className="Dash">
            <div>
              <Navbar />
            </div>

            <div className="screen">
              <iframe
                className="YT"
                title="sandman"
                width="380"
                height="300"
                src="http://www.youtube.com/embed/3TdPBB9Z_cs"
                frameborder="0"
                allowfullscreen
              ></iframe>
              <div className="Element">
                <h2> My devices</h2>
                <p> Liste med alle enheter. Trykker på valgt enhet for å få en fil med all måledata fra den?</p>
              </div>
              <div className="Element">
                <Maps className="Maps"></Maps>
>>>>>>> 37731fb4c6e6b810fd189c6672f501bce0b3ae33
              </div>
              <div className="screen">
                <Switch>
                  <Route
                    path="/dashboard/"
                    exact
                    component={Default}
                    className="Default"
                  />
                  <Route
                    path="/dashboard/maps"
                    component={Maps}
                    className="Maps"
                  />
                </Switch>
              </div>
            </Router>
          </div>
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
