import React, { Component } from "react";
import PropTypes from "prop-types";
import Why from "./why";
import How from "./howitworks";
import Faq from "./faq";
import Customer from "./customer";
import Contact from "./contact";
import Test from "./testimonial";
import AOS from "aos";
import Carousel from "nuka-carousel";
import Partner from "./partner";
import "./home.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Segment,
  Menu,
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Sidebar,
  Container,
  Card,
  Accordion,
  Label,
  GridColumn,
  Statistic,
  Loader,
  Item
} from "semantic-ui-react";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      activeIndex: 0,
      Loader: true
    };
  }

  componentDidMount() {
    this.setState({ Loader: false });
  }

  render() {
    const { activeIndex } = this.state;
    if (this.state.Loader) {
      return <Loader active inline="centered" />;
    } else if (!this.state.Loader) {
      return (
        <div>
          <div className="loader" />
          <div
            className="jumbotron"
            style={{
              margin: "0 auto",
              textAlign: "center",
              backgroundImage: "url(/Images/0001.jpg)",
              backgroundColor: "#CFEEF7  "
            }}
          >
            <Grid>
              <Grid.Column
                mobile={16}
                computer={6}
                style={{ margin: "auto auto" }}
              >
                <Image
                  src="https://cdn1.imggmi.com/uploads/2019/7/31/8d52719c3ebab55fc8d470d1984d66a2-full.jpg"
                  size="large"
                  //style={{ margin: "0 auto" }}
                />
              </Grid.Column>
              <Grid.Column
                mobile={16}
                computer={10}
                style={{ margin: "auto auto" }}
              >
                <h1>Hungry during bus journey?</h1>
                <h3>Your favourite snacks available right at your seat</h3>
                <Button color="orange">
                  <Link to="/products" style={{ color: "white" }}>
                    View Our Products
                  </Link>
                </Button>
              </Grid.Column>
            </Grid>
          </div>

          <div className="container">
            <div style={{ marginTop: "50px" }}>
              <div id="why">
                <Why />
              </div>
              <hr
                width="50%"
                color="#f37010 "
                size="18"
                style={{ marginTop: "60px" }}
              />
              <div id="how">
                <How />
              </div>
              <hr
                width="50%"
                color="#f37010 "
                size="18"
                style={{ marginTop: "60px" }}
              />
              <div id="customer">
                <Customer />
              </div>
              <hr
                width="50%"
                color="#f37010 "
                size="18"
                style={{ marginTop: "60px" }}
              />
              <div id="FAQ">
                <Faq />
              </div>
              <hr
                width="50%"
                color="#f37010 "
                size="18"
                style={{ marginTop: "60px" }}
              />
              <div id="partner" style={{ marginTop: "50px" }}>
                <Partner />
              </div>
              <hr
                width="50%"
                color="#f37010 "
                size="18"
                style={{ marginTop: "60px" }}
              />
              <div
                id="contact"
                style={{
                  textAlign: "center",
                  marginTop: "40px"
                }}
              >
                <Contact />
              </div>
              <hr
                width="50%"
                color="#f37010 "
                size="18"
                style={{ marginTop: "60px" }}
              />

              <div id="testimonials">
                <Test />
              </div>
            </div>
          </div>
          <hr
            width="50%"
            color="#f37010 "
            size="18"
            style={{ marginTop: "60px" }}
          />
        </div>
      );
    }
  }
}

export default Home;
