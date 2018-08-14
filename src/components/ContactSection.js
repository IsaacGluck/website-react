import React, { Component } from 'react';
import '../styles/App.css';

class ContactSection extends Component {
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
    console.log(`A name was submitted: ${this.state.name}`);
    // console.log(this.nameRef)
    // event.preventDefault();
  }

  render() {
    return (
      <div className="contactSection" id="contact">
        <div className="contactHeader">
          <div className="contactHeaderText">
            <span>
Contact
            </span>
          </div>
        </div>
        <div className="contactBody">
          <form onSubmit={this.handleSubmit} action="https://formspree.io/isaacbgluck@gmail.com" method="POST">
            <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleNameChange} />
            <input type="text" placeholder="Email" name="_replyto" value={this.state.email} onChange={this.handleEmailChange} />
            <textarea placeholder="Message" name="message" value={this.state.message} onChange={this.handleMessageChange} />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default ContactSection;
