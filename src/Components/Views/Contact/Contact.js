import React, { Component } from "react";
import ReactContactForm from "react-mail-form";

import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // Bind functions to this
  }

  componentDidMount() {}

  render() {
    return (
      <div className="contact">
        <ReactContactForm
          buttonText="Send"
          contentsPlaceholder="What's on your mind?"
          titlePlaceholder="Subject..."
          className="mail-form"
          to="arvidlarzzon@hotmail.com"
        />
      </div>
    );
  }
}

/* Nedan ett mailgun exempel
import React, { Component } from "react";

import "../Styles/Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: '',
    };
    // Bind functions to this
  }
  static sender = "sender@example.com";

  handleCancel() {
    this.setState({
      feedback: "",
    });
  }

  handleChange = (event) => {
    this.setState({
      feedback: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template,
    } = this.props.env;

    this.sendFeedback(
      template,
      this.sender,
      receiverEmail,
      this.state.feedback
    );

    this.setState({
      formSubmitted: true,
    });
  }

  sendFeedback(templateId, senderEmail, receiverEmail, feedback) {
    window.emailjs
      .send("mailgun", templateId, {
        senderEmail,
        receiverEmail,
        feedback,
      })
      .then(res => {
        this.setState({
          formEmailSent: true,
        });
      })
      // Handle errors here however you like
      .catch(err => console.error("Failed to send feedback. Error: ", err));
  }
  componentDidMount() {}

  render() {
    return (
      <form className="feedback-form" onSubmit={this.handleSubmit}>
        <h1>Your Feedback</h1>
        <textarea
          className="text-input"
          id="feedback-entry"
          name="feedback-entry"
          onChange={this.handleChange}
          placeholder="Enter your feedback here"
          required
          value={this.state.feedback}
        />
        <div className="btn-group">
          <button className="btn btn--cancel" onClick={this.handleCancel}>
            Cancel
          </button>
          <input type="submit" value="Submit" className="btn btn--submit" />
        </div>
      </form>
    );
  }
}

export default Contact;
*/
export default Contact;
