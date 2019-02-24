import React, { Component } from "react";

import projectFile from "../Constants/projectlist.js";
import "../Styles/Projects.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: projectFile
    };
    // Bind functions to this
  }
  componentDidMount() {}

  render() {
    let projectsToRender = null;

    projectsToRender = this.state.projects.map(project => {
      return (
        <div key={project.id} className="project-wrapper">
          <div className="project-item">
            <h1>{project.name}</h1>
            {project.link ? <a href={project.link}>Project Website</a> : null}
            <br />
            {project.gitLink ? (
              <a href={project.gitLink}>Project GitHub</a>
            ) : null}
            <p>{project.description}</p>
          </div>
          <div
            className="project-item"
            style={project.sizeH ? { height: project.sizeH } : null}
          >
            {project.video ? (
              <iframe
                title={project.name}
                src={project.video}
                width={project.sizeW}
                height={project.sizeH}
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen="true"
              />
            ) : (
              <p>No video</p>
            )}
          </div>
        </div>
      );
    });
    return <div className="projects">{projectsToRender}</div>;
  }
}

export default Projects;
