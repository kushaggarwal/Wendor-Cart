import React, { Component } from "react";
import AOS from "aos";
import { Grid, GridColumn, Image, Statistic } from "semantic-ui-react";

class Customer extends Component {
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
            fontFamily: "Avenir"
          }}
        >
          <img src="https://img.icons8.com/officel/80/000000/conference-call.png" />
          <br />
          CUSTOMER'S NUMBERS
        </h1>
        <Grid
          data-aos="flip-left"
          data-aos-anchor-placement="top-center"
          style={{
            margin: "20px 20px",
            textAlign: "center"
          }}
        >
          <Grid.Column color="orange" mobile={8} computer={4} tablet={4}>
            <Statistic inverted>
              <Statistic.Value>28</Statistic.Value>
              <Statistic.Label> No. of Buses</Statistic.Label>
            </Statistic>
          </Grid.Column>
          <Grid.Column mobile={8} computer={4} tablet={4}>
            <Statistic color="orange">
              <Statistic.Value>980+</Statistic.Value>
              <Statistic.Label>Happy Customers Served</Statistic.Label>
            </Statistic>
          </Grid.Column>
          <Grid.Column mobile={8} computer={4} tablet={4}>
            <Statistic color="orange">
              <Statistic.Value>20+</Statistic.Value>
              <Statistic.Label>Partnered Brands</Statistic.Label>
            </Statistic>
          </Grid.Column>
          <Grid.Column color="orange" mobile={8} computer={4} tablet={4}>
            <Statistic inverted>
              <Statistic.Value>
                <Image
                  src="https://img.icons8.com/ios-filled/50/000000/infinity.png"
                  inline
                  circular
                />
              </Statistic.Value>
              <Statistic.Label>Coffe cups consumed</Statistic.Label>
            </Statistic>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Customer;
