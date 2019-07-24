import React, { Component } from "react";
import AOS from "aos";
import { Grid, GridColumn, Image } from "semantic-ui-react";

class How extends Component {
  constructor(props) {
    super(props);
    AOS.init();
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
            textAlign: "center",
            marginBottom: "30px",
            marginTop: "100px",
            fontFamily: "'Bree Serif', serif"
          }}
        >
          <img
            src="https://img.icons8.com/dusk/64/000000/working-with-a-laptop.png"
            style={{ marginRight: "10px", marginTop: "10px" }}
          />
          <br />
          HOW IT WORKS
        </h1>
        <Grid
          style={{ marginTop: "70px" }}
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
        >
          <Grid.Column mobile={8} computer={4}>
            <Image
              src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
              size="small"
              centered
            />
          </Grid.Column>

          <Grid.Column mobile={8} computer={4}>
            <h3
              style={{
                fontFamily: " 'Amaranth', sans-serif",
                fontSize: "24px"
              }}
            >
              STEP 1
            </h3>
            <p style={{ fontFamily: "'Literata', serif" }}>
              Scan the QR code or enter the given URL on the back of the seat to
              open the Happybox menu.
            </p>
          </Grid.Column>

          <Grid.Column mobile={8} computer={4}>
            <h3
              style={{
                fontFamily: " 'Amaranth', sans-serif",
                fontSize: "24px"
              }}
            >
              STEP 2
            </h3>
            <p style={{ fontFamily: "'Literata', serif" }}>
              Select the products and add to cart.
            </p>
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

          <Grid.Column mobile={8} computer={4}>
            <h3
              style={{
                fontFamily: " 'Amaranth', sans-serif",
                fontSize: "24px"
              }}
            >
              STEP 3
            </h3>
            <p style={{ fontFamily: "'Literata', serif" }}>
              Check out the cart and complete the payment through UPI, Paytm.
            </p>
          </Grid.Column>

          <Grid.Column mobile={8} computer={4}>
            <h3
              style={{
                fontFamily: " 'Amaranth', sans-serif",
                fontSize: "24px"
              }}
            >
              STEP 4
            </h3>
            <p style={{ fontFamily: "'Literata', serif" }}>
              Go and collect items from the Conductor ( Batman of the bus ) and
              enjoy snacking.
            </p>
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
