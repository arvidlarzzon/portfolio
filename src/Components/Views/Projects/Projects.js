import React, { Component } from "react";

import projectFile from "Constants/projectlist.js";
import "./Projects.css";

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
      // let responsiveW;
      // let responsiveH;
      // console.log(project.sizeW);
      // if (project.sizeW && project.sizeW > this.props.windowWidth) {
      //   let aspectRatio = project.sizeH / project.sizeW;
      //   responsiveH = this.props.windowWidth * aspectRatio;
      //   responsiveW = this.props.windowWidth;
      // }

      return (
        <div key={project.id} className="project-wrapper">
          <div className="project-item">
            <h1>{project.name}</h1>
            {project.link ? (
              <div>
                <a href={project.link}>Project Website</a>{" "}
              </div>
            ) : null}

            {project.gitLink ? (
              <div>
                <a href={project.gitLink}>Project GitHub</a>
              </div>
            ) : null}
            <p>{project.description}</p>
          </div>
          <div className="project-video">
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
            ) : null}
          </div>
        </div>
      );
    });
    return <div className="projects">{projectsToRender}</div>;
  }
}

export default Projects;
