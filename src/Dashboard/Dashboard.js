import React, { Component, useState } from "react";
import "./Dashboard.scss";
import firebase from "../firebase.js";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Navbar from "../Navbar/Navbar";
import Maps from "../Components/Maps/Maps";
import Default from "../Components/Default/Default";
import Data from "../Components/Data/Data";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

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
      <div id="Dashboard" className="Dashboard">
        {this.state.isSignedIn ? (
          <div className="Dash">
            <Router>
              <div className="navbar">
                <Navbar />
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
                  <Route
                    path="/dashboard/data"
                    component={Data}
                    className="Data"
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
