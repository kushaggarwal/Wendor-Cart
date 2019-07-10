import React from "react";

import "./App.css";
import Cart from "./components/cart";
import ShowCard from "./components/card";
import { data } from "./data";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import {
  Card,
  Image,
  Button,
  Icon,
  Modal,
  Header,
  Label,
  Popup,
  Sticky
} from "semantic-ui-react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: [],
      books: data,
      counter: 1,
      showCart: true
    };
  }

  componentWillMount() {
    localStorage.clear();
  }

  cartHandler(e) {
    localStorage.setItem("item" + e.id, JSON.stringify(e));
    console.log(localStorage.length);
  }

  cartShow() {
    return { ...window.localStorage };
  }

  deleteitem(item) {
    var array = [...this.state.obj];

    const index = array.indexOf(item);
    array.splice(index, 1);
    this.setState({
      obj: array
    });
    //console.log(this.state.obj);
    this.localSet(array);
  }
  localSet(items) {
    localStorage.clear();

    for (var i = 0; i < items.length; i++) {
      localStorage.setItem("item" + i, JSON.stringify(items[i]));
    }
  }

  addCart() {
    var cart = this.cartShow();
    var list = [];
    var item;
    var alert;
    for (item in cart) {
      list.push(JSON.parse(cart[item]));
    }

    console.log(cart.item2);
    console.log(list);
    this.setState({
      obj: list
    });
  }
  incrementCounter = counter => {
    console.log(counter);
    counter = counter + 1;
    console.log(counter);
  };

  decrementCounter = counter => {
    {
      counter == 1
        ? this.setState({ showCart: true })
        : this.setState({ showCart: false });
    }

    counter = counter - 1;
  };
  render() {
    const { obj } = this.state;

    return (
      <div className="ui  container">
        <div>
          <h1
            className="header"
            style={{ marginTop: "20px", textDecoration: "underline" }}
          >
            Our Products
          </h1>

          <Modal
            size="small"
            trigger={
              <div className="fixed-bottom">
                <Button
                  icon
                  labelPosition="left"
                  fluid
                  color="light yellow"
                  size="big"
                  onClick={() => {
                    this.addCart();
                  }}
                >
                  <div
                    id="box"
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: "green",
                      position: "fixed",
                      left: "50px",
                      bottom: "50px",
                      borderRadius: "20px",
                      color: "white"
                    }}
                  >
                    <p id="number">{localStorage.length}</p>
                  </div>
                  <Icon name="cart" size="large" />
                  Go to Cart
                </Button>
              </div>
            }
            closeIcon
          >
            <Header icon="cart" content="Your Shopping Cart" />
            <Modal.Content>
              <Card.Group>
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
              </Card.Group>
            </Modal.Content>
          </Modal>
        </div>
        <div style={{ margin: "0 auto" }}>
          <Card.Group style={{ marginTop: "100px" }}>
            {this.state.books.map((book, index) => (
              <ShowCard
                book={book}
                showCart={this.showCart}
                cartHandler={this.cartHandler.bind(this)}
                incrementCounter={this.incrementCounter.bind(this)}
                decrementCounter={this.decrementCounter.bind(this)}
              />
            ))}
          </Card.Group>
        </div>
      </div>
    );
  }
}

export default App;
