import React, { Component } from "react";

import myResume from "../Assets/CV.pdf";
import "../Styles/Resume.css";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // Bind functions to this
  }

  componentDidMount() {}

  render() {
    return <div className="resume" />;
  }
}

export default Resume;
