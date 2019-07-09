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

export default class Cart extends React.Component {
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

          <img
            src={this.props.obj.img}
            wrapped
            ui={false}
            className="img_styles"
          />
          <Card.Content>
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
