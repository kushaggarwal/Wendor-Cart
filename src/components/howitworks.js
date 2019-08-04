import React, { Component } from "react";
import AOS from "aos";
import { Grid, GridColumn, Image } from "semantic-ui-react";
import "./home.css";

class How extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1
          data-aos="fade-down"
          style={{
            textAlign: "center",
            marginBottom: "30px",
            marginTop: "100px",
            fontFamily: "Avenir"
          }}
        >
          <img
            src="https://img.icons8.com/dusk/64/000000/working-with-a-laptop.png"
            style={{ marginRight: "10px", marginTop: "10px" }}
          />
          <br />
          HOW IT WORKS
        </h1>
        <Grid style={{ marginTop: "70px" }} data-aos="zoom-in">
          <Grid.Column mobile={8} computer={4}>
            <Image
              style={{ marginTop: "25px" }}
              src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
              size="small"
              centered
            />
          </Grid.Column>

          <Grid.Column mobile={8} computer={4} className="HW_position">
            <h3
              style={{
                fontFamily: "Helvetica",
                fontSize: "24px"
              }}
            >
              STEP 1
            </h3>
            <h4 style={{ fontFamily: "'Helvetica'" }}>
              Scan the QR code or enter the given URL on the back of the seat to
              open the HappyTrip menu.
            </h4>
          </Grid.Column>

          <Grid.Column mobile={8} computer={4} className="HW_position">
            <h3
              style={{
                fontFamily: "'Helvetica'",
                fontSize: "24px"
              }}
            >
              STEP 2
            </h3>
            <h4 style={{ fontFamily: "'Helvetica'" }}>
              Select the products and add to cart.
            </h4>
          </Grid.Column>

          <Grid.Column mobile={8} computer={4}>
            <Image src="/Images/hand.jpg" size="small" centered />
          </Grid.Column>

          <Grid.Column mobile={8} computer={4}>
            <Image
              data-aos-duration="500"
              src="https://img.icons8.com/cotton/128/000000/mobile-payment--v3.png"
              size="small"
              centered
            />
          </Grid.Column>

          <Grid.Column mobile={8} computer={4} className="HW_position">
            <h3
              style={{
                fontFamily: " 'Helvetica'",
                fontSize: "24px"
              }}
            >
              STEP 3
            </h3>
            <h4 style={{ fontFamily: "Helvetica" }}>
              Check out the cart and complete the payment through UPI, Paytm.
            </h4>
          </Grid.Column>

          <Grid.Column mobile={8} computer={4} className="HW_position">
            <h3
              style={{
                fontFamily: "'Helvetica'",
                fontSize: "24px"
              }}
            >
              STEP 4
            </h3>
            <h4 style={{ fontFamily: "Helvetica" }}>
              Go and collect items from the Conductor ( Batman of the bus ) and
              enjoy snacking.
            </h4>
          </Grid.Column>
          <Grid.Column mobile={8} computer={4}>
            <Image src="Images/delivery.jpg" size="small" centered />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default How;
