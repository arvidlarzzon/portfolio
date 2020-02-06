import React, { Component } from "react";

import profilePic from "Assets/Jag.jpg";
import "./Header.css";
import Menu from "./Menu";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // Bind functions to this
  }
  componentDidMount() {}

  render() {
    return (
      <div className="App-header">
        <div className="header-wrapper">
          <img src={profilePic} className="profileImg" alt="logo" />
          <div className="menu-name-wrapper">
            <span className="name-span">Arvid Larsson</span>
            <Menu />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
