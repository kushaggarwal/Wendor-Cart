import React from "react";
import logo from "../logo.svg";
import "../App.css";
import Carousel from "nuka-carousel";
import Cart from "./cart";
import AOS from "aos";

import { data } from "../data";
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

export default class ShowCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: true,
      counter: 0
    };
  }

  storageHandler(item) {
    var array = this.cartShow();
    console.log(array);
    var list = [];
    var value = item;
    console.log(value);
    var alert;
    for (item in array) {
      list.push(JSON.parse(array[item]));
    }
    for (var i = 0; i < list.length; i++) {
      var data = list[i];
      console.log(data.id);
      console.log(value.id);
      if (data.id === value.id) {
        console.log(true);
        list.splice(i, 1);
      }
    }
    return list;
  }
  pushCart(item, flag) {
    var list = this.storageHandler(item);
    list.push(item);
    this.localSet(list);
    if (flag == 1) {
      console.log("this is flag" + flag);
      this.props.subtract();
    } else if (flag == 0) {
      console.log("this is flag" + flag);
      this.props.add();
    }
  }

  cartShow() {
    return { ...window.localStorage };
  }
  deleteHandler(item) {
    this.setState({ showCart: true, counter: 0 });
    var list = this.storageHandler(item);
    this.props.subtract();
    this.localSet(list);
  }
  localSet(items) {
    localStorage.clear();

    for (var i = 0; i < items.length; i++) {
      localStorage.setItem("item" + i, JSON.stringify(items[i]));
    }
  }

  render() {
    const book = this.props.book;
    const cartHandler = this.props.cartHandler;
    const deleteitem = this.props.deleteitem;
    const add = this.props.add;
    const subtract = this.props.subtract;

    return (
      <Card className="styles">
        <Modal
          trigger={
            <img src={book.img} wrapped ui={false} className="img_styles" />
          }
        >
          <Modal.Header>Photo Gallery</Modal.Header>
          <Modal.Content image>
            <Carousel>
              {book.images.map((image, index) => {
                return (
                  <img
                    src={image.img1}
                    style={{
                      height: "300px",
                      width: "300px",
                      margin: "0 auto"
                    }}
                  />
                );
              })}
            </Carousel>
          </Modal.Content>
        </Modal>
        <Card.Content>
          <div
            style={{
              textAlign: "center",
              height: "50px",
              fontSize: "12pt",
              fontFamily: "'Quicksand', sans-serif",
              color: "grey",
              textDecoration: "bold",
              margin: "0 auto"
            }}
          >
            {book.author}
          </div>
          <Popup
            trigger={
              <Header
                as="h5"
                image="https://img.icons8.com/windows/32/000000/info.png"
                content={"Rs " + book.price}
              />
            }
            content={book.desc}
            on="click"
            position="top right"
          />

          <div style={{ textAlign: "center" }} />
        </Card.Content>
        <Card.Content extra>
          {this.state.showCart ? (
            <Button
              onClick={() => {
                this.setState({
                  counter: this.state.counter + 1
                });
                book.cartQuantity = this.state.counter + 1;
                add();
                this.setState({
                  showCart: false
                });
                cartHandler(book);
              }}
              color="orange"
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
                  this.setState({
                    counter: this.state.counter - 1
                  });
                  book.cartQuantity = this.state.counter - 1;
                  this.pushCart(book, 1);
                  {
                    book.cartQuantity === 0
                      ? this.deleteHandler(book)
                      : this.setState({
                          showCart: false
                        });
                  }
                }}
              />
              <Label size="large">{book.cartQuantity}</Label>
              <Button
                icon="plus"
                color="green"
                onClick={() => {
                  if (book.cartQuantity < 3) {
                    book.cartQuantity = this.state.counter + 1;
                    this.pushCart(book, 0);
                    this.setState({
                      counter: this.state.counter + 1
                    });

                    console.log(this.state.counter);
                    console.log(book.cartQuantity);
                  } else {
                    alert("You cannot add more than 3 items");
                  }
                }}
              />
            </Button.Group>
          )}
        </Card.Content>
      </Card>
    );
  }
}
