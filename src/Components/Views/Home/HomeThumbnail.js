import React, { Component } from 'react';

import '../Styles/HomeThumbnail.css'

class HomeThumbnail extends Component {
  constructor(props) {
    // Gonna get some sick props here
    super(props);
    this.state = {
    };
    // Bind functions to this
  }
  componentDidMount () {
  }

  render() {
    //let ThumbnailToRender = null;

    // projectsToRender = this.state.projects.map((project) => {
    //   return (
    //     <div key={project.id} className="project-wrapper">
    //       <div className="table-cell">
    //         <h1>{project.name}</h1>
    //         {project.link ? (
    //           <a href={project.link}>Project Website</a>
    //           ):(
    //           <p>N/A</p>
    //         )}
    //         <p>{project.description}</p>
    //       </div>
    //       <div className="table-cell">
    //         {project.video ? (
    //         <iframe title={project.name} src={project.video} width={project.sizeW} height={project.sizeH} webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    //         ) : (
    //           <p>No video</p>
    //         )}
    //       </div>
    //     </div>
    //   )
    // })
    return (
      <div className="thumbnail" >
        <h1>Thumbnail</h1>
        {this.props.number}
      </div>
    );
  }
}

export default HomeThumbnail;
