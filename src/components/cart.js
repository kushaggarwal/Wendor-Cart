import React from "react";

import "../App.css";

import { Card, Label } from "semantic-ui-react";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <Card className="cart">
          <img
            src={this.props.obj.img}
            wrapped
            ui={false}
            className="img_styles"
          />
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
              {this.props.obj.author}
            </div>

            <Card.Meta>{"Rs" + this.props.obj.price}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Label as="a" color="red">
                Quantity
                <Label.Detail>{this.props.obj.cartQuantity}</Label.Detail>
              </Label>
              <Label as="a">
                Price
                <Label.Detail>
                  {this.props.obj.price * this.props.obj.cartQuantity}
                </Label.Detail>
              </Label>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
