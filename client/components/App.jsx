import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";

const App = () => {
  return (
    <React.Fragment>
      <section class="section">
    <div class="container">
      <h1 class="title">
        Treasure Lord
      </h1>
      <p class="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>
    </div>
  </section>

      <Router>
        <Route exact path="/" component={Home} />
        <Nav />
      </Router>
    </React.Fragment>
  );
};

export default App;
