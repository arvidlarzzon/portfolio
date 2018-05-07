import React, { Component } from 'react';
import ReactContactForm from 'react-mail-form';

import '../Styles/Contact.css'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // Bind functions to this
  }
  
  componentDidMount () {
  }

  render() {
    return (
      <div className="contact">
        <ReactContactForm buttonText="Send" contentsPlaceholder="What's on your mind?" titlePlaceholder="Subject..." className="mail-form" to="arvidlarzzon@hotmail.com" />
      </div>
    );
  }
}

export default Contact;
