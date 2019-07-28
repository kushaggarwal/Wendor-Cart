import React, { Component } from "react";
import AOS from "aos";
import { Grid, GridColumn } from "semantic-ui-react";

class Partner extends Component {
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
          data-aos-easing="linear"
          data-aos-duration="900"
          style={{
            textAlign: "center",
            marginBottom: "30px",
            marginTop: "100px",
            fontFamily: "Avenir"
          }}
        >
          <img src="https://img.icons8.com/doodle/48/000000/handshake.png" />
          <br />
          PARTNERED BRANDS
        </h1>
        <Grid data-aos="zoom-in" data-aos-duration="900">
          <GridColumn mobile={1} tablet={4} computer={4} />
          <Grid.Column
            mobile={7}
            tablet={4}
            computer={4}
            style={{
              fontFamily: "Helvetica"
            }}
          >
            <ul style={{ fontSize: "15pt" }}>
              <li style={{ marginBottom: "10px" }}>Nescafe</li>
              <li style={{ marginBottom: "10px" }}>Too Yumm</li>
              <li style={{ marginBottom: "10px" }}>ACT II</li>
              <li style={{ marginBottom: "10px" }}>Epigamia</li>
              <li style={{ marginBottom: "10px" }}>frut</li>
              <li style={{ marginBottom: "10px" }}>Red Bull</li>
              <li style={{ marginBottom: "10px" }}>Brewhouse</li>
            </ul>
          </Grid.Column>

          <Grid.Column
            mobile={7}
            tablet={4}
            computer={4}
            style={{
              fontFamily: "Helvetica"
            }}
          >
            <ul style={{ fontSize: "15pt" }}>
              <li style={{ marginBottom: "10px" }}>Unibic</li>
              <li style={{ marginBottom: "10px" }}>Cornitos</li>
              <li style={{ marginBottom: "10px" }}>
                Snickers
                <br />
                Mars
              </li>
              <li style={{ marginBottom: "10px" }}>Cadbury</li>
              <li style={{ marginBottom: "10px" }}>Yoga Bar</li>
              <li style={{ marginBottom: "10px" }}>Orbit</li>
              <li style={{ marginBottom: "10px" }}>Lifebuoy</li>
            </ul>
          </Grid.Column>
          <GridColumn mobile={1} tablet={4} computer={4} />
        </Grid>
      </div>
    );
  }
}

export default Partner;
