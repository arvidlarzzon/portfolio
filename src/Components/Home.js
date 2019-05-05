import React, { Component } from "react";
import myResume from "../Assets/Arvid-larsson-CV.pdf";
import { FaFile, FaDownload } from "react-icons/lib/fa";

import { mySkills } from "../Assets/skills";
import "../Styles/Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="summary-wrapper">
          <div className="summary-item">
            <h3>About this app</h3>
            <p>
              Hi and welcome to my portfolio. <br />
              For this website I've used Facebook's create-react-app framework and done the entire app from scratch.
              <br />
              I might not be the best designer but as long as someone tells me how they want something to look i can accomplish that.
              <br />
              <br />I hope you find what you seek here.
            </p>
          </div>
          <div className="summary-item">
            <h3>Summary</h3>
            <p>
              I usually call myself a web developer. My favorite technologies
              are Node and React. But as long as I get an incentive to I love to
              learn new technologies too, especially if they are written in
              Javascript. Otherwise in my sparetime I like snowboarding, cooking, whine and whisky. 
              Preferrably enjoyed with friends.
            </p>
            <p>
              Checkout my resumé below or keep browsing the page if you are
              interested in knowing more about me.
            </p>
            <form method="get" className="dl-form" action={myResume}>
              <button className="dl-pdf" type="submit">
                <span className="btn-txt">
                  <FaDownload /> Download Resumé{" "}
                  <FaFile className="resume-icon" />
                </span>
              </button>
            </form>
          </div>
          <div className="summary-item">
            <h3>Skills</h3>
            <div className="skills-wrapper">
              {mySkills.map((skill, index) => {
                return (
                  <div className="skill" key={index}>
                    <img className="skill-img" src={skill.image} alt="" />
                    <div className="skill-description">{skill.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
