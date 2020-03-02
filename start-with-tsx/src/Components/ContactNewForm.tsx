import React, { Component } from "react";
import "./ContactNewForm.css";

interface ContactNewFormState {
  firstName: string;
}
interface ContactNewFormProps {}
class ContactNewForm extends Component<
  ContactNewFormProps,
  ContactNewFormState
> {
  constructor(props: ContactNewFormProps) {
    super(props);
    this.state = {
      firstName: ""
    };
  }

  render() {
    const { firstName } = this.state;
    return (
      <form action="">
        <label htmlFor="firstName">First name : </label>
        <input
          type="text"
          id={"firstName"}
          name={"firstName"}
          value={firstName}
        />
      </form>
    );
  }
}

export default ContactNewForm;
