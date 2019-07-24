import React from "react";
import logo from "../logo.svg";
import "../App.css";
import Carousel from "nuka-carousel";
import Cart from "./cart";

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
  pushCart(item) {
    var list = this.storageHandler(item);
    list.push(item);
    this.localSet(list);
  }

  cartShow() {
    return { ...window.localStorage };
  }
  deleteHandler(item) {
    this.setState({ showCart: true, counter: 0 });
    var list = this.storageHandler(item);

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
                return <img src={image.img1} style={{ height: "300px" }} />;
              })}
            </Carousel>
          </Modal.Content>
        </Modal>
        <Card.Content>
          <div
            style={{
              width: "172px",
              height: "69px",
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
            content={book.desc}
            trigger={
              <Header
                as="h5"
                image="https://img.icons8.com/windows/32/000000/info.png"
                content={"Rs " + book.price}
              />
            }
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

                this.setState({
                  showCart: false
                });
                cartHandler(book);
              }}
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
                  this.setState({
                    counter: this.state.counter - 1
                  });
                  book.cartQuantity = this.state.counter - 1;
                  this.pushCart(book);
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
                  this.setState({
                    counter: this.state.counter + 1
                  });

                  console.log(this.state.counter);
                  console.log(book.cartQuantity);
                  if (book.cartQuantity < 3) {
                    book.cartQuantity = this.state.counter + 1;
                    this.pushCart(book);
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
