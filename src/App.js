import React from "react";

import "./App.scss";
import Header from "./Header/Header.js";
import Home from "./Home/Home.js";
import About from "./About/About.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header className="header" />
        <Switch>
          <Route path="/" exact component={Home} className="home" />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
