import React, { Component } from "react";
import AOS from "aos";
import { Grid, GridColumn, Image } from "semantic-ui-react";

class Why extends Component {
  constructor(props) {
    super(props);
    AOS.init();
  }
  componentDidMount() {
    AOS.refresh();
  }
  render() {
    return (
      <div>
        <h1
          data-aos="fade-down"
          style={{
            textAlign: "center",
            marginBottom: "30px",
            marginTop: "100px",
            fontFamily: " Avenir"
          }}
        >
          <img src="https://img.icons8.com/officel/60/000000/why-us-male.png" />
          <br /> WHY HAPPY TRIP?
        </h1>
        <Grid data-aos="zoom-in">
          <GridColumn mobile={0} computer={2} tablet={2} />

          <Grid.Column
            mobile={16}
            tablet={4}
            computer={4}
            style={{
              textAlign: "center",
              marginTop: "10px",
              fontFamily: "Helvetica"
            }}
          >
            <Image
              src="data:image/jpeg;base64,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"
              size="medium"
              centered
            />
            <h2 style={{ fontFamily: "Avenir" }}>Hungry!!</h2>
            <p>
              Why wait hours for your bus to stop when you can get quality food
              to satisfy your hunger right at your seat in the bus.
            </p>
          </Grid.Column>
          <Grid.Column
            mobile={16}
            tablet={4}
            computer={4}
            style={{
              textAlign: "center",
              marginTop: "10px",
              fontFamily: "Helvetica"
            }}
          >
            <Image src="/Images/snackbox.jpg" size="small" centered />
            <h2 style={{ fontFamily: "Avenir" }}>Choose your best pick.</h2>
            <p>
              Variety of healthy snacking options available ranging from
              eatables to drinks.
            </p>
          </Grid.Column>
          <Grid.Column
            mobile={16}
            tablet={4}
            computer={4}
            style={{
              textAlign: "center",
              marginTop: "10px",
              fontFamily: "Helvetica"
            }}
          >
            <Image
              src="https://image.flaticon.com/icons/svg/1611/1611397.svg"
              size="small"
              centered
            />
            <h2 style={{ fontFamily: "Avenir" }}>
              Longing for a comfortable trip ?
            </h2>
            <p>
              Make your trip memorable and comfortable with economical and
              hygienic snacking options.
            </p>
          </Grid.Column>
          <GridColumn mobile={0} computer={2} tablet={2} />
        </Grid>
      </div>
    );
  }
}

export default Why;
