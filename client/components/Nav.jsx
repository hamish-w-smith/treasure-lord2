import React from "react";
// import { Link } from 'react-router-dom'
import { HashRouter as Router, Route, Link } from "react-router-dom";

const Nav = props => {
  return (
    <React.Fragment>
      <div>
        <h1>Nav bar!</h1>
        <ul>
          <li>Events</li>
          <li>Members</li>
          <li>Committee</li>
          <li>Transactions</li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Nav;
