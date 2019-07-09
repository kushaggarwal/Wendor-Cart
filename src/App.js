import React from "react";
import logo from "./logo.svg";
import "./App.css";
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

  cartHandler(e) {
    this.setState({ showCart: false });

    localStorage.setItem("item" + e.id, JSON.stringify(e));
  }
  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  decrementCounter = () => {
    {
      this.state.counter == 1
        ? this.setState({ showCart: true })
        : this.setState({ showCart: false });
    }
    this.setState({
      counter: this.state.counter - 1
    });
  };

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
    console.log(items);
    console.log(items.length);
    console.log(items[0]);
    for (var i = 0; i < items.length; i++) {
      localStorage.setItem("item" + i, JSON.stringify(items[i]));
    }
  }

  addCart() {
    var cart = this.cartShow();
    var list = [];
    var item;
    for (item in cart) {
      console.log(cart[item]);
      list.push(JSON.parse(cart[item]));
    }

    console.log(cart.item2);
    console.log(list);
    this.setState({
      obj: list
    });
  }
  render() {
    const { obj } = this.state;

    return (
      <div className="ui  container">
        <div>
          <h1 className="header" style={{ marginTop: "20px" }}>
            Our Products
          </h1>

          <Modal
            size="small"
            trigger={
              <div className="fixed-top">
                <img
                  src="https://img.icons8.com/color/96/000000/shopping-cart.png"
                  style={{ position: "absolute", right: "0", margin: "3%" }}
                  onClick={() => {
                    this.addCart();
                  }}
                />
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
              <Card className="styles">
                <Modal
                  trigger={
                    <img
                      src={book.img}
                      wrapped
                      ui={false}
                      className="img_styles"
                    />
                  }
                >
                  <Modal.Header>Select a Photo</Modal.Header>
                  <Modal.Content image>
                    <AwesomeSlider>
                      <div data-src="/Images/alofrutjuice/Alofrut Kiwi Aloevera Juice 300ml/afj2.jpg" />
                      <div data-src="/Images/oreo/Cadbury Oreo Vanilla Crème Biscuit, 120 gm/oreov1.jpg" />
                      <div data-src="/Images/alofrutjuice/Alofrut Kiwi Aloevera Juice 300ml/afj2.jpg" />
                    </AwesomeSlider>
                  </Modal.Content>
                </Modal>
                <Card.Content>
                  <Card.Header>{book.author}</Card.Header>
                  <Popup
                    content={book.desc}
                    trigger={
                      <Icon
                        name="info circle"
                        size="large"
                        className="right floated "
                      />
                    }
                  />
                  {/*<Card.Meta>
                    <span className="date">{book.author}</span>
                  </Card.Meta>*/}

                  <div style={{ textAlign: "center" }}>
                    <h4>{"Rs" + book.price}</h4>
                  </div>
                </Card.Content>
                <Card.Content extra>
                  {this.state.showCart ? (
                    <Button
                      onClick={() => this.cartHandler(book)}
                      color="blue"
                      fluid
                    >
                      Add to cart
                    </Button>
                  ) : (
                    <Button.Group fluid>
                      <Button
                        icon="minus"
                        color="red"
                        onClick={() => {
                          this.decrementCounter();
                        }}
                      />
                      <Label size="large">{this.state.counter}</Label>
                      <Button
                        icon="plus"
                        color="green"
                        onClick={() => {
                          this.incrementCounter();
                        }}
                      />
                    </Button.Group>
                  )}
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </div>
      </div>
    );
  }
}

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  incrementCounter = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCounter = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  render() {
    return (
      <div>
        <Card style={{ margin: "10px" }}>
          <Icon
            name="remove circle"
            className="float right"
            size="large"
            onClick={() => this.props.deleteHandler(this.props.obj)}
          />
          <Card.Content>
            <img
              src={this.props.obj.img}
              wrapped
              ui={false}
              className="img_styles"
            />

            <Card.Header style={{ textAlign: "center" }}>
              {this.props.obj.name}
            </Card.Header>

            <Card.Meta>
              <span className="date">{this.props.obj.author}</span>
            </Card.Meta>
            <Card.Meta>{"Rs" + this.props.obj.price}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button.Group>
                {this.state.count > 0 ? (
                  <Button
                    icon="minus"
                    color="red"
                    onClick={() => {
                      this.decrementCounter();
                    }}
                  />
                ) : (
                  <Button icon="minus" color="red" disabled />
                )}

                <Label size="large">{this.state.count}</Label>
                <Button
                  icon="plus"
                  color="green"
                  onClick={() => {
                    this.incrementCounter();
                  }}
                />
              </Button.Group>
              <Label.Group tag style={{ marginLeft: "40px" }}>
                <Label as="a" size="large">
                  {"Rs" + this.props.obj.price * this.state.count}
                </Label>
              </Label.Group>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default App;
