import React, { Component } from "react";
import AOS from "aos";
import { Grid, GridColumn } from "semantic-ui-react";
import Carousel from "nuka-carousel";
class Test extends Component {
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
          style={{
            textAlign: "center",
            marginBottom: "30px",
            marginTop: "100px",
            fontFamily: "Avenir"
          }}
        >
          <img src="https://img.icons8.com/cotton/64/000000/certificate.png" />
          <br />
          CUSTOMER'S TESTIMONIAL
        </h1>

        <Carousel data-aos="zoom-in">
          <div>
            <p style={{ textAlign: "center", fontSize: "12pt" }}>
              Experiencing this kind of service inside bus is really great. It
              is indeed very helpful if you are travelling and you get something
              to munch. Really appreciate their efforts.
            </p>
            <h5 style={{ textAlign: "center" }}>
              Rahul Singh ( Noida to Lucknow )
            </h5>
            <h5 style={{ textAlign: "center", marginTop: "90px" }} />
          </div>
          <div>
            <p style={{ textAlign: "center", fontSize: "12pt" }}>
              Providing snacks inside the bus and that too healthy ones is an
              amazing initiative. I have always wanted this kind of service when
              I am travelling. Keep it up guys!!
            </p>
            <h5 style={{ textAlign: "center" }}>
              Lakshit Anand ( Delhi to Shimla )
            </h5>
          </div>
          <div>
            <p style={{ textAlign: "center", fontSize: "12pt" }}>
              Hunger has always been a problem for me while travelling in buses,
              but now thanks to Happytrip for this much needed initiative. I can
              get my favourite snacks to munch on without any worry.
            </p>
            <h5 style={{ textAlign: "center" }}>
              Deepak Puri ( Delhi to Chandigarh )
            </h5>
          </div>
          <div>
            <p style={{ textAlign: "center", fontSize: "12pt" }}>
              I really like the efforts put in by Happytrip as they only deal
              with quality products and receiving hygienic food during travels
              is no longer a hustle.
            </p>
            <h5 style={{ textAlign: "center" }}>
              Navneet Kaur ( Delhi to Ludhiana )
            </h5>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Test;
