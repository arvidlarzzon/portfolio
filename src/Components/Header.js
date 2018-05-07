import React, { Component } from 'react';

import '../Styles/Header.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // Bind functions to this
  }
  componentDidMount () {
  }
  
  render() {
    return (
        <div className="App-header">
          <div className="header-wrapper">
            <img src='/jag.jpg' className="profileImg" alt="logo" />
            <span className="name-span">Arvid Larsson</span>
            {this.props.children /*This is the menu*/}
          </div>
        </div>
    );
  }
}

export default Header;