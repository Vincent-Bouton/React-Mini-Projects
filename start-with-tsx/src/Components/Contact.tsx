import React, { Component } from "react";
import "./Contact.css";
import ContactNewForm from "./ContactNewForm";

class Contact extends Component {
  constructor(props: object) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>CONTACT</h1>
        <ContactNewForm />
      </div>
    );
  }
}

export default Contact;
