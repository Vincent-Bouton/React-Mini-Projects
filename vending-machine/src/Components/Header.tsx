import React, { Component } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
interface HeaderState {}
interface HeaderProps {}
class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
        <nav>
          <NavLink to={"/"}> Machine </NavLink>
          <NavLink to={"/chips"}> Chips </NavLink>
          <NavLink to={"/soda"}> soda </NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
