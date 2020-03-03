import * as React from "react";
import "./Contact.css";
import ContactNewForm from "./ContactNewForm";
interface ContactState {
  firstName: string;
}
interface ContactProps {}
class Contact extends React.Component<ContactProps, ContactState> {
  readonly state: ContactState = {
    firstName: ""
  };
  handleChange = (evt: any) => {
    this.setState({ firstName: evt.target.value });
  };

  render() {
    const { firstName } = this.state;
    return (
      <div>
        <h1>CONTACT</h1>
        <ContactNewForm
          firstName={firstName}
          handleChange={this.handleChange}
        />
        <p>Hi my name is : {firstName}</p>
      </div>
    );
  }
}

export default Contact;
