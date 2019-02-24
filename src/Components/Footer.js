import React, { Component } from "react";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaStackOverflow
} from "react-icons/lib/fa";
import EnvelopeIcon from "react-icons/lib/fa/envelope";

import "../Styles/Footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLink = this.handleLink.bind(this);
  }

  handleLink(action) {
    let url = null;

    if (action === "github") {
      url = "https://github.com/arvidlarzzon";
    } else if (action === "linkedin") {
      url = "https://www.linkedin.com/in/arvidlarzzon/";
    } else if (action === "facebook") {
      url = "https://www.facebook.com/arvidlarzzon";
    } else if (action === "instagram") {
      url = "https://www.instagram.com/arvidlarzzon/";
    } else if (action === "mail") {
      url = "mailto:arvidlarzzon@hotmail.com";
      window.open(url);
      return;
    } else if (action === "so") {
      url = "https://stackoverflow.com/users/5945085/a-larsson";
    } else {
      console.log("wtf", action);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }
  render() {
    return (
      <div className="App-footer">
        <div className="footer-heading">Learn more or get in contact:</div>
        <div className="link-wrapper">
          <div className="link-elem" onClick={() => this.handleLink("github")}>
            <FaGithub />
            <p className="link-text">GitHub</p>
          </div>
          <div className="link-elem" onClick={() => this.handleLink("so")}>
            <FaStackOverflow />
            <p className="link-text">StackOverflow</p>
          </div>
          <div
            className="link-elem"
            onClick={() => this.handleLink("linkedin")}
          >
            <FaLinkedin />
            <p className="link-text">LinkedIn</p>
          </div>
          <div
            className="link-elem"
            onClick={() => this.handleLink("facebook")}
          >
            <FaFacebook />
            <p className="link-text">Facebook</p>
          </div>
          <div
            className="link-elem"
            onClick={() => this.handleLink("instagram")}
          >
            <FaInstagram />
            <p className="link-text">Instagram</p>
          </div>
          <div className="link-elem" onClick={() => this.handleLink("mail")}>
            <EnvelopeIcon />
            <p className="link-text">E-mail</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
