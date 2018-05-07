import React, { Component } from 'react';

//import '../Styles/Resume.css'

class Resume extends Component {
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
      <div className="resume">
        <h1>This is Resumé</h1>
      </div>
    );
  }
}

export default Resume;
