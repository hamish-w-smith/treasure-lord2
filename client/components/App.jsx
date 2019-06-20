import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";

const App = () => {
  return (
    <React.Fragment>
      <h1>Treasure Lord</h1>

      <Router>
        <Route exact path="/" component={Home} />
        <Nav />
      </Router>
    </React.Fragment>
  );
};

export default App;
