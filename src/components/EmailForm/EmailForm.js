import React, { Component } from "react";
import axios from "axios";

export class EmailForm extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "Send Message",
  };
  formSubmit = (e) => {
    e.preventDefault();
    this.setState({
      buttonText: "...sending",
    });
    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };
    axios
      .post("https://portfoliosite-email-server.herokuapp.com/email", data)
      .then((res) => {
        this.setState({ sent: true }, this.resetForm());
      })
      .catch(() => {
        console.log("Message not sent");
      });
  };
  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      buttonText: "Message Sent",
    });
  };
  render() {
    return (
      <div className="EmailForm-container">
        <form onSubmit={(e) => this.formSubmit(e)}>
          <input
            onChange={(e) => this.setState({ name: e.target.value })}
            name="name"
            className="name-input"
            type="text"
            placeholder="Name"
            value={this.state.name}
          />

          <input
            onChange={(e) => this.setState({ email: e.target.value })}
            name="email"
            className="your-email"
            type="email"
            placeholder="your@email.com"
            required
            value={this.state.email}
          />

          <textarea
            onChange={(e) => this.setState({ message: e.target.value })}
            name="message"
            className="message-input"
            type="text"
            placeholder="Your message"
            value={this.state.message}
            required
          />

          <button type="submit" className="email-submit-button">
            {this.state.buttonText}
          </button>
        </form>
      </div>
    );
  }
}
