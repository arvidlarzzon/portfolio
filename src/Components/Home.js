import React, { Component } from "react";
import myResume from "../Assets/CV.pdf";
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
              Hi and welcome to my protfolio. <br />
              For this site I've used Facebook's create-react-app framework.
              <br />
              I'm still not the best designer but this page has looked a lot
              worse.
              <br />
              <br />I hope you find what you seek here.
            </p>
          </div>
          <div className="summary-item">
            <h3>Summary</h3>
            <p>
              I usually call myself a web developer. My favorite technologies
              are Node and React. But as long as i get an incentive to i love to
              learn new technologies too, especially if they are written in
              Javascript. I like snowboarding, cooking and whisky.
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
