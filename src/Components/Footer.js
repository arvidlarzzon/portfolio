import React, { Component } from 'react';
import {FaGithub, FaFacebook, FaLinkedin, FaInstagram} from 'react-icons/lib/fa'
import EnvelopeIcon from 'react-icons/lib/fa/envelope'

import '../Styles/Footer.css'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleLink = this.handleLink.bind(this);
    }
    
    handleLink(action){
        if(action === "github") {
            console.log("github")
        } else if (action === "linkedin"){
            console.log(action)
        } else if (action === "facebook"){
            console.log(action)
        } else if (action === "instagram"){
            console.log(action)
        } else if (action === "mail"){
            console.log(action)
        } else {
            console.log("wtf", action)
        }
    }
    render() {
        let linkArr = ['github', 'linkedin', 'facebook', 'instagram', 'mail'];
        return (
            <div className="App-footer">
                <div className="link-wrapper">
                    <div className="link-elem" onClick={this.handleLink("github")}>
                        <FaGithub  />
                        <p>GitHub</p>
                    </div>
                    <div className="link-elem" onClick={this.handleLink("linkedin")} >
                        <FaLinkedin />
                        <p>LinkedIn</p>
                    </div>
                    <div className="link-elem" onClick={this.handleLink("facebook")}>
                        <FaFacebook  />
                        <p>Facebook</p>
                    </div>
                    <div className="link-elem" onClick={this.handleLink("instagram")}>
                        <FaInstagram  />
                        <p>Instagram</p>
                    </div>
                    <div className="link-elem" onClick={this.handleLink("mail")} >
                        <EnvelopeIcon />
                        <p>E-mail</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;