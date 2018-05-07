import React, { Component } from 'react';

//import '../Styles/Projects.css'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {id:1, name: 'Plot Twitch', link: 'https://infoviz-dh2321.firebaseapp.com', video: 'https://drive.google.com/file/d/1tvGS5ZQy-pZYNEGlVbxMWhyyRnsn89_U/preview'},
        {id:2, name: 'Plot Twitch', link: 'https://infoviz-dh2321.firebaseapp.com', video: null},
        {id:3, name: 'Plot Twitch', link: 'https://infoviz-dh2321.firebaseapp.com', video: null},
        {id:4, name: 'Plot Twitch', link: 'https://infoviz-dh2321.firebaseapp.com', video: null}
      ]
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
          <h2>{project.name}</h2>
          <a href={project.link}>Project Website</a>
          {project.video ? (
          <iframe title={project.name} src={project.video} width="640" height="480"></iframe>
          ) : (
            <p>No video</p>
          )}
        </div>
      )
    })
    return (
      <div className="projects" >
        <h1>This is Projects</h1>
        {projectsToRender}
      </div>
    );
  }
}

export default Projects;
