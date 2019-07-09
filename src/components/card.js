import React from "react";
import logo from "../logo.svg";
import "../App.css";

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
      counter: 1
    };
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

  render() {
    const book = this.props.book;
    const cartHandler = this.props.cartHandler;
    return (
      <Card className="styles">
        <Modal
          trigger={
            <img src={book.img} wrapped ui={false} className="img_styles" />
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
          <div
            style={{
              width: "172px",
              height: "69px",
              fontSize: "12pt",
              fontFamily: "'Quicksand', sans-serif",
              color: "grey",
              textDecoration: "bold"
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
    );
  }
}
