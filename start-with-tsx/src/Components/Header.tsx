import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  constructor(props: object) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className="Header">
        <nav className={"Header-nav"}>
          <NavLink
            exact
            to={"/"}
            activeClassName={"activeNav"}
            className={"Header-NavLink"}
          >
            Home
          </NavLink>
          <NavLink
            exact
            to={"/Contact"}
            activeClassName={"activeNav"}
            className={"Header-NavLink"}
          >
            Contact
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
