import React, { Component } from "react";

import "../Styles/About.css";
import dalarna from "../Assets/dalarna.jpg";
import louise from "../Assets/louiseojag.jpg";
import ischgl from "../Assets/ischgl.jpg";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "projects",
      views: ["About", "Projects", "Resumé", "Contact"],
    };
  }

  render() {
    return (
      <div className="about">
        <h1>About Me</h1>
        <div className="chapter">
          <div className="text-div">
            <p>
              I'm a social and positive guy who always try to see things for
              what they are from a quite rational point of view. I like working
              with web technologies and for making time go by i like to play
              computer games. This application is for example built with React.
              I know it's overkill for such a small application but it's a way
              of displaying that I know some React.
            </p>
            <p>
              One of my absolute favorite things to do is probably to have a
              beer in a zauna somewhere where it's quiet and still in the
              company of friends, or just standing by a barbecue, not to brag
              but I would argue I'm quite a grillmaster.
            </p>
            <p>
              This image here to the right is at my girlfriends summer place in
              Rättvik, Dalarna.
            </p>
          </div>
          <div className="img-div">
            <img className="about-img" src={dalarna} alt="" />
          </div>
        </div>
        <div className="chapter">
          <div className="text-div">
            <p>
              This picture is from when i was in Ischgl, Austria. But the
              picture is probably taken just on the border to Switzerland.
            </p>
            <p>
              I love to go skiing, even though I don't usually have skis on my
              feet. I usually have a snowboard. Which might have been the best
              decision I ever made and that was as an 11-year old. Nowadays I'm
              a little held back by a knee injury i got playing basketball. But
              that doesnt stop me from enjoying some high speeds sometimes.
            </p>
            <p>
              This picture is from when i was in Ischgl, Austria. But the
              picture is probably taken just on the border to Switzerland.
            </p>
          </div>
          <div className="img-div">
            <img className="about-img" src={ischgl} alt="" />
          </div>
        </div>
        <div className="chapter">
          <div className="text-div">
            <p>
              And my lovely girlfriend Louise is the one who more than welcomly
              accompanies me on these adventures. She really makes my feet stay
              on the ground and I can only dream of a better life partner.
            </p>
            <p>
              The best thing with Louise is that she loves to spend time with
              family and friends even more than I do. And she really knows how
              to bring everyone together and make the best out of a family
              dinner.
            </p>
          </div>
          <div className="img-div">
            <img className="about-img" src={louise} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
