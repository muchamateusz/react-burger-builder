import React, { Component } from "react";

import Button from "../../../common/components/Button/Button";

import "./ContactData.less";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    }
  };
  render() {
    return (
      <div className="contact-data">
        <h4>Enter your data</h4>
        <form>
          <input
            className="contact-data__input "
            type="text"
            name="name"
            placeholder="Your name"
          />
          <input
            className="contact-data__input "
            type="text"
            name="email"
            placeholder="Your email"
          />
          <input
            className="contact-data__input "
            type="text"
            name="postalCode"
            placeholder="Your postalCode"
          />
          <Button type="continue">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
