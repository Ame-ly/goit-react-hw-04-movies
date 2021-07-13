import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import styles from "./NavBar.module.css"

class NavBar extends Component {
  render() {
    return (
      <ul className="Nav">
        <li className="Nav_item">
          <NavLink
            exact
            to="/"
            className="NavLink"
            activeClassName="NavLink__active"
          >
            Home
          </NavLink>
        </li>
        <li className="Nav_item">
          <NavLink
            to="/movies"
            className="NavLink"
            activeClassName="NavLink__active"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default NavBar;
