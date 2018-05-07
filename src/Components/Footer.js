import React, { Component } from 'react';

import '../Styles/Footer.css'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
 
    render() {
        return (
            <div className="App-footer">
                <h1>This is Footer component</h1>
                <p>Some links to GitHub, LinkedIn, Facebook and instagram</p>
            </div>
        );
    }
}

export default Footer;