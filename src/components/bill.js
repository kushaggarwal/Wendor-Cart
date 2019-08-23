import React from "react";
import randomstring from "randomstring";
import "../App.css";
import axios from "axios";
import User from "./user.js";
import mongoose from "mongoose";
import { List, Icon, Button } from "semantic-ui-react";

export default class Bill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      orderid: ""
    };
  }
  saveData() {
    console.log("function called");

    axios({
      method: "post",
      url: "/testtxn/" + this.state.price + "/" + this.state.orderid,
      data: {
        bill: this.props.obj
      }
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  componentDidMount() {
    var item;
    var sum = 0;
    for (var i = 0; i < this.props.obj.length; i++) {
      var sum = sum + this.props.obj[i].price * this.props.obj[i].cartQuantity;
    }
    this.setState({
      orderid: randomstring.generate({ length: 50 }),
      price: sum
    });
  }

  dataStore() {}

  render() {
    return (
      <div style={{ marginBottom: "30px" }}>
        <div style={{ textAlign: "center", width: "100%" }}>
          <h3>
            Total Bill : <Icon name="rupee" />
            {this.state.price}{" "}
          </h3>
          <Button
            color="red"
            onClick={() => {
              this.saveData();
            }}
          >
            <a
              style={{ color: "white" }}
              href={"/testtxn/" + this.state.price + "/" + this.state.orderid}
            >
              Pay Now
            </a>
          </Button>
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
