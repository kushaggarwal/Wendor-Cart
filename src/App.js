import React from "react";
import Home from "./components/home";
import About from "./components/about";
import "./App.css";
import Cart from "./components/cart";
import ShowCard from "./components/card";
import Bill from "./components/bill";
import Main from "./main";
import { data } from "./data";
import AOS from "aos";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import {
  Card,
  Image,
  Button,
  Icon,
  Modal,
  Header,
  Label,
  Popup,
  Sticky,
  Menu,
  Segment,
  Grid
} from "semantic-ui-react";

class App extends React.Component {
  constructor(props) {
    super(props);
    AOS.init();
    this.state = {
      obj: [],
      books: data,
      counter: 1
    };
  }
  componentDidMount() {
    AOS.refresh();
  }

  render() {
    const { obj } = this.state;

    return (
      <div>
        <h3
          className="dropdown container left floated"
          style={{
            textAlign: "center",
            marginTop: "20px",
            height: "40px",
            marginBottom: "50px"
          }}
          onClick={() => {
            this.setState({
              show: !this.state.show
            });
          }}
        >
          <Image
            src="https://img.icons8.com/color/48/000000/menu.png"
            size="mini"
            floated="right"
          />
          {!this.state.show ? (
            <Image
              src="/Images/logo.jpg"
              size="tiny"
              //style={{ margin: "0 auto" }}
              floated="left"
            />
          ) : null}
        </h3>
        <Router>
          <div className="components">
            {this.state.show ? (
              <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <Grid>
                  <Grid.Column mobile={8} component={8} tablet={8}>
                    <h3 data-aos="fade-left">
                      <Link to={"/"}>Home</Link>
                    </h3>
                    <h3 data-aos="fade-left">
                      <Link to={"/#why"}>Why Happy Trip</Link>
                    </h3>
                    <h3 data-aos="fade-left">
                      <Link to={"/products"}>Products</Link>
                    </h3>
                    <h3 data-aos="fade-left">
                      <Link to={"/#how"}>How It Works</Link>
                    </h3>
                    <h3 data-aos="fade-left">
                      <Link to={"/#customer"}>Customers</Link>
                    </h3>
                  </Grid.Column>
                  <Grid.Column mobile={8} component={8} tablet={8}>
                    <h3 data-aos="fade-right">
                      <Link to={"/#testimonials"}>Testimonials</Link>
                    </h3>
                    <h3 data-aos="fade-right">
                      <Link to={"/#partner"}>Brands</Link>
                    </h3>
                    <h3 data-aos="fade-right">
                      <Link to={"/about"}>About</Link>
                    </h3>
                    <h3 data-aos="fade-right">
                      <Link to={"/#FAQ"}>FAQ</Link>
                    </h3>
                    <h3 data-aos="fade-right">
                      <Link to={"/#contact"}>Contact Us</Link>
                    </h3>
                  </Grid.Column>
                </Grid>
              </div>
            ) : null}
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/products" component={Main} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
