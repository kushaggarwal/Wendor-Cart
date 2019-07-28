import React, { Component } from "react";
import AOS from "aos";
import { Grid, GridColumn } from "semantic-ui-react";

class Contact extends Component {
  constructor(props) {
    super(props);
    AOS.init({
      delay: 800
    });
  }
  componentDidMount() {
    AOS.refresh();
  }
  render() {
    return (
      <div>
        <h1
          data-aos="fade-down"
          data-aos-anchor-placement="top-center"
          style={{
            margin: "20px 0",
            fontFamily: "Avenir"
          }}
        >
          <img src="https://img.icons8.com/office/40/000000/contact-card.png" />
          <br />
          CONTACT US
        </h1>
        <div data-aos="flip-up" data-aos-anchor-placement="top-center">
          <p style={{ fontFamily: "Helvetica" }}>
            Feel free to reach us in case of any queries at
            <br />
            <img src="https://img.icons8.com/material-outlined/24/000000/composing-mail.png" />
            team@happytrip.store <br />
            or
            <br />
            you can also call us at
            <br />
            <img src="https://img.icons8.com/android/24/000000/phone-disconnected.png" />
            +91 8800964026.
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
