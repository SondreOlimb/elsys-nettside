import React, { Component, useState } from "react";
import "./Dashboard.scss";
import firebase from "../firebase.js";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Navbar from "../Navbar/Navbar";
import Maps from "../Components/Maps/Maps";
import Default from "../Components/Default/Default";
import Data from "../Components/Data/Data";
import DataViz from "../Components/Data/DataViz";
import Live from "../Components/Live/Live";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

//dette elementet hånderer autentiseringen og routingen til alle elementene på my page.

class Dashboard extends Component {
  //implementerer firbaseui
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,

      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false, //håndterer inloginger som feiler
    },
  };

  componentDidMount = () => {
    //hvis brukeren logger inn renderes dette elementet.
    firebase.auth().onAuthStateChanged((user) => {
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
              {
                //router håndterer hvilket av elementene som skal hvises
              }
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
                    component={DataViz}
                    className="Maps"
                  />
                  <Route
                    path="/dashboard/data"
                    component={Data}
                    className="Data"
                  />
                  <Route
                    path="/dashboard/live"
                    component={Live}
                    className="Live"
                  />
                </Switch>
              </div>
            </Router>
          </div>
        ) : (
          //hvis brukere ikke er ligget rendres dette elementet

          <span className="signin">
            <h1>Sign in to see your dashboard</h1>
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
