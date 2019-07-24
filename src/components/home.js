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
  Item
} from "semantic-ui-react";
class Home extends Component {
  constructor(props) {
    super(props);
    AOS.init();
    this.state = {
      show: false,
      activeIndex: 0
    };
  }
  componentDidMount() {
    AOS.refresh();
  }

  render() {
    const { activeIndex } = this.state;

    return (
      <div>
        <div
          className="jumbotron"
          style={{
            textAlign: "center",
            backgroundImage: "url(/Images/0001.jpg)"
          }}
        >
          <Grid>
            <Grid.Column
              mobile={16}
              computer={6}
              style={{ margin: "auto auto" }}
            >
              <Image src="/Images/0001.jpg" size="large" />
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
            <div id="why" data-aos-delay="500">
              <Why />
            </div>
            <hr
              width="50%"
              color="#f37010 "
              size="18"
              style={{ marginTop: "60px" }}
            />
            <div id="how" data-aos-delay="500">
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
            <div id="FAQ" data-aos-delay="500">
              <Faq />
            </div>
            <hr
              width="50%"
              color="#f37010 "
              size="18"
              style={{ marginTop: "60px" }}
            />
            <div
              id="partner"
              style={{ marginTop: "50px" }}
              data-aos-delay="500"
            >
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
              data-aos-delay="500"
            >
              <Contact />
            </div>
            <hr
              width="50%"
              color="#f37010 "
              size="18"
              style={{ marginTop: "60px" }}
            />

            <div id="testimonials" data-aos-delay="500">
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

export default Home;
