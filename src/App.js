import React, { withReducer } from "react";

import "./App.scss";
import Header from "./Header/Header.js";
import Home from "./Home/Home.js";
import About from "./About/About.js";
import Dashboard from "./Dashboard/Dashboard.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Footer from "./Footer/Footer.js";

//Grunn elementet. her hånderes routingen mellom de forksjelllige elementene.

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} className="home" />
          <Route path="/about" component={About} className="About" />
          <Route
            path="/dashboard"
            exact
            component={Dashboard}
            className="Dashboard"
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
