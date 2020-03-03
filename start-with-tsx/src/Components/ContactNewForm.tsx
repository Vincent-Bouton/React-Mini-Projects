import React, { Component } from "react";
import "./ContactNewForm.css";

interface ContactNewFormState {}
interface ContactNewFormProps {
  firstName: string;
  handleChange: (evt: any) => void;
}
class ContactNewForm extends Component<
  ContactNewFormProps,
  ContactNewFormState
> {
  constructor(props: ContactNewFormProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { firstName } = this.props;
    return (
      <form action="">
        <label htmlFor="firstName">First name : </label>
        <input
          type="text"
          id={"firstName"}
          name={"firstName"}
          value={firstName}
          onChange={this.props.handleChange}
        />
      </form>
    );
  }
}

export default ContactNewForm;
