import React, { Component } from "react";
import axios from "axios";

export class TraditionalEmailForm extends Component {
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
      <form className="email-form-t" onSubmit={(e) => this.formSubmit(e)}>
        <div className="name-input-container-t">
          <input
            onChange={(e) => this.setState({ name: e.target.value })}
            name="name"
            className="name-input-t"
            type="text"
            placeholder="Name"
            value={this.state.name}
          />
        </div>

        <div className="your-email-container-t">
          <input
            onChange={(e) => this.setState({ email: e.target.value })}
            name="email"
            className="your-email-t"
            type="email"
            placeholder="your@email.com"
            required
            value={this.state.email}
          />
        </div>

        <div className="message-input-container-t">
          <textarea
            onChange={(e) => this.setState({ message: e.target.value })}
            name="message"
            className="message-input-t"
            type="text"
            placeholder="Your message"
            value={this.state.message}
            required
          />
        </div>

        <div className="email-button-container-t">
          <button type="submit" className="email-submit-button-t">
            {this.state.buttonText}
          </button>
        </div>
      </form>
    );
  }
}
