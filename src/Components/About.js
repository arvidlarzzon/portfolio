import React, { Component } from 'react';

//import '../Styles/About.css'

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'projects',
      views: ['About', 'Projects', 'Resumé', 'Contact'],

    };
    // Bind functions to this
  }
  
  componentDidMount () {
  }

  render() {
    return (
      <div className="About">
        <h1>This is About</h1>
      </div>
    );
  }
}

export default About;
