import React, { Component } from "react";
import AOS from "aos";
import { Grid, GridColumn, Image, Accordion, Icon } from "semantic-ui-react";

class Faq extends Component {
  constructor(props) {
    super(props);
    AOS.init();
    this.state = {
      show: false,
      activeIndex: 0
    };
  }
  componentDidMount() {
    AOS.refresh();
  }
  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  render() {
    const { activeIndex } = this.state;
    return (
      <div>
        <h1
          data-aos="zoom-in"
          style={{
            textAlign: "center",
            marginBottom: "30px",
            marginTop: "100px",
            fontFamily: "Avenir"
          }}
        >
          <img src="https://img.icons8.com/cute-clipart/64/000000/faq.png" />
          <br />
          FAQ'S
        </h1>
        <Accordion data-aos="fade-right" style={{ fontFamily: "Helvetica" }}>
          <Accordion.Title
            active={activeIndex === 12}
            index={12}
            onClick={this.handleClick}
            style={{ fontSize: "13pt" }}
          >
            <Icon name="dropdown" />
            How can I get this service inside my bus ?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 12}>
            <p>
              Contact partner@happytrip.store or you can even call directly at
              +91 8800964026.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
            style={{ fontSize: "13pt" }}
          >
            <Icon name="dropdown" />
            Why happytrip?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>
              Our soulful purpose of this venture is to provide an enjoyable and
              comforting experience to people travelling in buses.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
            style={{ fontSize: "13pt", margin: "10px 0" }}
          >
            <Icon name="dropdown" />
            How to buy while being in the bus?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <p>
              You can scan the QR code or just open happytrip.store/shop and
              select the products you want to buy.
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 3}
            index={3}
            onClick={this.handleClick}
            style={{ fontSize: "13pt", margin: "10px 0" }}
          >
            <Icon name="dropdown" />
            How do I make the payment and when I have to pay?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            <p>
              After selecting your products you need to checkout and make
              payment online through multiple options available like UPI, PAYTM.
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 4}
            index={4}
            onClick={this.handleClick}
            style={{ fontSize: "13pt", margin: "10px 0" }}
          >
            <Icon name="dropdown" />
            Can I make the payment in cash?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 4}>
            <p>No, we only allow online payments as of now.</p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 5}
            index={5}
            onClick={this.handleClick}
            style={{ fontSize: "13pt", margin: "10px 0" }}
          >
            <Icon name="dropdown" />
            What to do after making payment and where do I collect the products
            from?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 5}>
            <p>
              After making the payment you will receive an order confirmation
              which you need to go and show the conductor in the bus. He will
              then handover the products to you.
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 6}
            index={6}
            onClick={this.handleClick}
            style={{ fontSize: "13pt", margin: "10px 0" }}
          >
            <Icon name="dropdown" />
            What if the conductor denies giving me the products?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 6}>
            <p>
              Contact team@happytrip.store or you can even call directly at +91
              8800964026.
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 7}
            index={7}
            onClick={this.handleClick}
            style={{ fontSize: "13pt", margin: "10px 0" }}
          >
            <Icon name="dropdown" />
            What if the products I receive are damaged or different from what I
            ordered?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 7}>
            <p>
              If this happens it's the rarest of rare cases due to some
              unavoidable circumstances. We apologize for the inconvenience
              caused. You can order some alternate product or take a refund.
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 8}
            index={8}
            onClick={this.handleClick}
            style={{ fontSize: "13pt", margin: "10px 0" }}
          >
            <Icon name="dropdown" />
            Can I exchange or cancel my order after buying?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 8}>
            <p>No, as per the policy its not allowed.</p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 9}
            index={9}
            onClick={this.handleClick}
            style={{ fontSize: "13pt", margin: "10px 0" }}
          >
            <Icon name="dropdown" />
            What if the product I ordered is not there with the conductor?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 9}>
            <p>
              This again is the rarest of rare cases due to some technical
              error. We apologize for the inconvenience caused. You can order
              some alternate product or take a refund.
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 10}
            index={10}
            onClick={this.handleClick}
            style={{ fontSize: "13pt", margin: "10px 0" }}
          >
            <Icon name="dropdown" />
            What if the amount is deducted from my account but your website
            still shows payment pending status?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 10}>
            <p>
              Sometimes due to weak internet or server connection this problem
              happens, but there is no need to worry. You just need to mail the
              payment done proof or the transaction number at
              team@happytrip.store and our team will reach out to you
              immediately.
            </p>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 11}
            index={11}
            onClick={this.handleClick}
            style={{ fontSize: "13pt", margin: "10px 0" }}
          >
            <Icon name="dropdown" />
            What if I have any other query which is not mentioned here?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 11}>
            <p>
              Contact team@happytrip.store or you can even call directly at +91
              8800964026.
            </p>
          </Accordion.Content>
        </Accordion>
      </div>
    );
  }
}

export default Faq;
