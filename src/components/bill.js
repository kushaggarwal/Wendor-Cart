import React from "react";

import "../App.css";

import { List, Icon } from "semantic-ui-react";

export default class Bill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0
    };
  }

  componentDidMount() {
    var item;
    var sum = 0;
    for (var i = 0; i < this.props.obj.length; i++) {
      var sum = sum + this.props.obj[i].price * this.props.obj[i].cartQuantity;
    }
    this.setState({
      price: sum
    });
  }

  render() {
    return (
      <div style={{ marginBottom: "30px" }}>
        <div style={{ textAlign: "center", width: "100%" }}>
          <h3>
            Total Bill : <Icon name="rupee" />
            {this.state.price}{" "}
          </h3>
        </div>

        {this.props.obj.map((item, index) => {
          return (
            <List divided relaxed>
              <List.Item>
                <List.Icon name="tag" size="large" verticalAlign="middle" />
                <List.Content>
                  <List.Header as="a">{item.author}</List.Header>

                  <List.Description as="a">
                    {"    Total Price for " +
                      item.cartQuantity +
                      " : Rs" +
                      item.price * item.cartQuantity}
                  </List.Description>
                </List.Content>
              </List.Item>
            </List>
          );
        })}
      </div>
    );
  }
}
