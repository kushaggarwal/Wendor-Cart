import React from "react";
import logo from "../logo.svg";
import "../App.css";
import Carousel from "nuka-carousel";

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
    this.state = {};
  }

  render() {
    const book = this.props.book;
    const cartHandler = this.props.cartHandler;
    const incrementCounter = this.props.incrementCounter;
    const decrementCounter = this.props.decrementCounter;
    const showCart = this.props.showCart;
    return (
      <Card className="styles">
        <Modal
          trigger={
            <img src={book.img} wrapped ui={false} className="img_styles" />
          }
        >
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Carousel>
              <img src="/Images/alofrutjuice/Alofrut Kiwi Aloevera Juice 300ml/afj2.jpg" />
              <img src="/Images/oreo/Cadbury Oreo Vanilla Crème Biscuit, 120 gm/oreov1.jpg" />
              <img src="/Images/alofrutjuice/Alofrut Kiwi Aloevera Juice 300ml/afj2.jpg" />
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
          {showCart ? (
            <Button
              onClick={() => {
                cartHandler(book);
                this.setState({ showCart: false });
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
                  decrementCounter(book.cartQuantity);
                }}
              />
              <Label size="large">{book.cartQuantity + 1}</Label>
              <Button
                icon="plus"
                color="green"
                onClick={() => {
                  incrementCounter(book.cartQuantity);
                }}
              />
            </Button.Group>
          )}
        </Card.Content>
      </Card>
    );
  }
}
