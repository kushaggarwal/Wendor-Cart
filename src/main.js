import React from "react";
import Home from "./components/home";
import About from "./components/about";
import "./App.css";
import Cart from "./components/cart";
import ShowCard from "./components/card";
import AOS from "aos";
import Bill from "./components/bill";
import { data } from "./data";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Card,
  Image,
  Button,
  Icon,
  Modal,
  Header,
  Loader,
  Label,
  Popup,
  Sticky,
  Menu
} from "semantic-ui-react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: [],
      books: data,
      counter: 0,
      showLabel: true,
      Loader: true
    };
  }

  cartHandler(e) {
    localStorage.setItem("item" + e.id, JSON.stringify(e));
  }

  cartShow() {
    return { ...window.localStorage };
  }
  add() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  subtract() {
    this.setState({
      counter: this.state.counter - 1
    });
  }
  deleteitem(item) {
    var array = [...this.state.obj];

    const index = array.indexOf(item);
    console.log(index);
    array.splice(index, 1);
    this.setState({
      obj: array
    });

    this.localSet(array);
  }
  localSet(items) {
    localStorage.clear();

    for (var i = 0; i < items.length; i++) {
      localStorage.setItem("item" + i, JSON.stringify(items[i]));
    }
  }
  componentDidMount() {
    localStorage.clear();
    this.setState({ Loader: false });
    window.scrollTo(0, 0);
  }

  addCart() {
    var cart = this.cartShow();
    var list = [];
    var item;
    var alert;
    for (item in cart) {
      list.push(JSON.parse(cart[item]));
    }

    this.setState({
      obj: list
    });
  }
  render() {
    const { obj } = this.state;
    if (this.state.Loader) {
      return <Loader active inline="centered" />;
    } else if (!this.state.Loader) {
      return (
        <div className="ui" style={{ padding: "20px" }}>
          <div className="loader" />
          <div>
            <h1
              data-aos="fade-right"
              className="header"
              style={{ marginTop: "20px", fontFamily: "Avenir" }}
            >
              Our Products
            </h1>

            <Modal
              size="small"
              trigger={
                this.state.showLabel && this.state.counter > 0 ? (
                  <div
                    style={{ marginBottom: "40px" }}
                    className="fixed-bottom"
                  >
                    <Button
                      icon
                      labelPosition="left"
                      fluid
                      color="green"
                      size="big"
                      onClick={() => {
                        this.addCart();
                        this.setState({
                          showLabel: false
                        });
                      }}
                    >
                      <div
                        id="box"
                        className="notifier"
                        style={{
                          width: "30px",
                          height: "30px",
                          backgroundColor: "#3498DB",
                          position: "fixed",
                          marginLeft: "10px",
                          bottom: "90px",
                          borderRadius: "20px",
                          color: "white"
                        }}
                      >
                        <p id="number" style={{ paddingBottom: "10px" }}>
                          {this.state.counter}
                        </p>
                      </div>
                      <Icon name="cart" size="large" />
                      Go to Cart
                    </Button>
                  </div>
                ) : null
              }
              closeIcon
              onClose={() => {
                this.setState({
                  showLabel: true
                });
              }}
            >
              <Header
                style={{ textAlign: "center", font: "bold 20px  Avenir" }}
                inverted
                color="orange"
                content="KINDLY COLLECT YOUR PRODUCTS FROM THE CONDUCTOR"
              />
              <Modal.Content>
                {obj.length != 0 ? (
                  <Bill obj={obj} />
                ) : (
                  <div className="header">
                    <h3>Your Cart is Empty</h3>
                  </div>
                )}
                {/*<Card.Group>
                  {obj.length != 0 ? (
                    obj.map((item, index) => {
                      return (
                        <Cart
                          obj={item}
                          array={obj}
                          deleteHandler={this.deleteitem.bind(this)}
                        />
                      );
                    })
                  ) : (
                    <div className="header">
                      <h3>Your Cart is Empty</h3>
                    </div>
                  )}
                  </Card.Group>*/}
              </Modal.Content>
              <Header
                style={{ textAlign: "center", font: "bold 20px  Avenir" }}
                inverted
                color="orange"
                content="KINDLY COLLECT YOUR PRODUCTS FROM THE CONDUCTOR"
              />
            </Modal>
          </div>
          <div style={{ margin: "0 auto" }}>
            <Card.Group style={{ marginTop: "100px" }} data-aos="zoom-in">
              {this.state.books.map((book, index) => (
                <ShowCard
                  book={book}
                  cartHandler={this.cartHandler.bind(this)}
                  add={this.add.bind(this)}
                  subtract={this.subtract.bind(this)}
                />
              ))}
            </Card.Group>
          </div>
        </div>
      );
    }
  }
}

export default Main;
