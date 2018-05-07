import React, { Component } from 'react';

//import '../Styles/Contact.css'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'projects',
      views: ['About', 'Projects', 'Resumé', 'Contact'],

    };
    // Bind functions to this
  }
  
  componentDidMount () {
  }

  render() {
    return (
      <div className="Contact">
        <div>Here's a contact form that sends emails to me</div>
      </div>
    );
  }
}

export default Contact;
