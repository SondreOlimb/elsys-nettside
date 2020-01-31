import React, { Component } from "react";
import "./Dashboard.scss";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

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
          <span>
            <div>Signed In!</div>
            <button
              onClick={() => firebase.auth().signOut()}
              className="signout"
            >
              Sign out!
            </button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>

            <iframe
              width="820"
              height="630"
              title="thebird"
              src="https://www.youtube.com/embed/6yGigYxDCa4?autoplay=1"
            ></iframe>
          </span>
        ) : (
          <span>
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
