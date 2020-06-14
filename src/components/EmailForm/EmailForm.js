import React, { Component } from "react";
import { AppContext } from "../../context/AppContext";
import axios from "axios";

export class EmailForm extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "Send Message",
  };
  static contextType = AppContext;
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
      .post("http://localhost:4444/email", data)
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
    const { layout } = this.context;
    return (
      <form
        className={`email-form${!layout ? "-t" : ""}`}
        onSubmit={(e) => this.formSubmit(e)}
      >
        <div className={`name-input-container${!layout ? "-t" : ""}`}>
          <input
            onChange={(e) => this.setState({ name: e.target.value })}
            name="name"
            className={`name-input${!layout ? "-t" : ""}`}
            type="text"
            placeholder="Name"
            value={this.state.name}
          />
        </div>

        <div className={`your-email-container${!layout ? "-t" : ""}`}>
          <input
            onChange={(e) => this.setState({ email: e.target.value })}
            name="email"
            className={`your-email${!layout ? "-t" : ""}`}
            type="email"
            placeholder="your@email.com"
            required
            value={this.state.email}
          />
        </div>

        <div className={`message-input-container${!layout ? "-t" : ""}`}>
          <textarea
            onChange={(e) => this.setState({ message: e.target.value })}
            name="message"
            className={`message-input${!layout ? "-t" : ""}`}
            type="text"
            placeholder="Your message"
            value={this.state.message}
            required
          />
        </div>

        <div className={`email-button-container${!layout ? "-t" : ""}`}>
          <button
            type="submit"
            className={`email-submit-button${!layout ? "-t" : ""}`}
          >
            {this.state.buttonText}
          </button>
        </div>
      </form>
    );
  }
}
