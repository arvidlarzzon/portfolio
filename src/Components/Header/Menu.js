import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaHome, FaCode, FaPaperPlane } from "react-icons/lib/fa";
import "../Styles/Menu.css";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      views: [
        {
          name: "Home",
          route: "/",
          icon: <FaHome />
        },
        {
          name: "About me",
          route: "/about",
          icon: <FaUser />
        },
        {
          name: "Projects",
          route: "/projects",
          icon: <FaCode />
        },
        {
          name: "Contact",
          route: "/contact",
          icon: <FaPaperPlane />
        }
      ]
    };
    // Bind functions to this
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {}
  render() {
    //const collapsed = this.state.collapsed;

    let menuItems = this.state.views.map((view, index) => (
      <NavLink
        key={index}
        exact
        to={view.route}
        className="nav-link"
        activeClassName="current-view"
      >
        <div className="inner-menu-item">
          {view.icon}
          {view.name}
        </div>
      </NavLink>
    ));

    return <div className="menu">{menuItems}</div>;
  }
}

export default Menu;
