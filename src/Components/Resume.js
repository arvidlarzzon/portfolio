import React, { Component } from 'react';
import PDF from 'react-pdf-js';

import myResume from '../Assets/CV.pdf'
import '../Styles/Resume.css'

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // Bind functions to this
  }
  
  componentDidMount () {
  }

  onDocumentComplete = (pages) => {
    this.setState({ page: 1, pages });
  }

  render() {

    return (
      <div className="resume">
      
        <form method="get" action={myResume}>
          <button className="dl-pdf" type="submit">
            <i className="fa fa-download"></i>  
            <span className="btn-txt" >Download PDF</span>
            <i className="fa fa-file-pdf-o"></i>
          </button>
        </form>
        <PDF
          className="pdf-doc"
          file={myResume}
          fillWidth
          onDocumentComplete={this.onDocumentComplete}
          onPageComplete={this.onPageComplete}
          page={this.state.page}
        />
        
      </div>
    );
  }
}

export default Resume;
