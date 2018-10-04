import React, { Component } from 'react';

import projectFile from '../Constants/projectlist.js'
import '../Styles/Projects.css'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: projectFile,
    };
    // Bind functions to this
  }
  componentDidMount () {
  }

  render() {
    let projectsToRender = null;

    projectsToRender = this.state.projects.map((project) => {
      return (
        <div key={project.id} className="project-wrapper">
          <div className="table-cell">
            <h1>{project.name}</h1>
            {project.link ? (
              <a href={project.link}>Project Website</a>
              ):(
              <p>N/A</p>
            )}
            <p>{project.description}</p>
          </div>
          <div className="table-cell">
            {project.video ? (
            <iframe title={project.name} src={project.video} width={project.sizeW} height={project.sizeH} webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            ) : (
              <p>No video</p>
            )}
          </div>
        </div>
      )
    })
    return (
      <div className="projects" >
        {projectsToRender}
      </div>
    );
  }
}

export default Projects;
