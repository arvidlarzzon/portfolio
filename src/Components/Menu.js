import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../Styles/Menu.css'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      views: [
        {name:'Home', route:'/'},
        {name:'About', route:'/about'},
        {name:'Projects', route:'/projects'},
        {name:'Resumé', route: '/resume'},
        {name:'Contact', route: '/contact'}
      ],

    };
    // Bind functions to this
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  componentWillReceiveProps () {
    this.setState({collapsed: this.props.collapsed})
  }
  componentWillMount () {
    this.setState({collapsed: this.props.collapsed})
    
  }
  toggleMenu(){

  }
  render() {
    //const collapsed = this.state.collapsed;

    let menuItems = this.state.views.map((view) =>
    <NavLink key={view.name} exact to={view.route} className="nav-link" activeClassName="current-view">
        {view.name}
    </NavLink>
    )
    
    return (
      <div className="menu">
        {menuItems}
      </div>
    );
  }
}

export default Menu;
