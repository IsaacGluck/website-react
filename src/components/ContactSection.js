import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import * as EmailValidator from 'email-validator';
import '../styles/App.css';
import 'react-toastify/dist/ReactToastify.css';

class ContactSection extends Component {
  static displayToast(message) {
    toast.error(message, {
      position: 'bottom-right',
      autoClose: 10000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    // console.log(`A name was submitted: ${this.state.name}`);
    // console.log(event);
    if (this.state.name === '') {
      event.preventDefault();
      ContactSection.displayToast("Provide a name, if you don't mind.");
    } else if (!EmailValidator.validate(this.state.email)) {
      event.preventDefault();
      ContactSection.displayToast('If you could use a real email...');
    } else if (this.state.message === '') {
      event.preventDefault();
      ContactSection.displayToast('Try submitting a message!');
    }
  }

  render() {
    return (
      <div className="contactSection" id="contact">
        <ToastContainer />
        <div className="contactHeader">
          <div className="contactHeaderText">
            <span>Contact</span>
          </div>
        </div>
        <div className="contactBody">
          <form
            onSubmit={this.handleSubmit}
            action="https://formspree.io/isaacbgluck@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_next" value="#" />
            <input
              type="text"
              placeholder="Name"
              name="name"
              maxLength="50"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <input
              type="text"
              placeholder="Email"
              name="_replyto"
              maxLength="50"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
            <textarea
              placeholder="Message"
              name="message"
              value={this.state.message}
              onChange={this.handleMessageChange}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default ContactSection;
