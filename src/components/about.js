import React, { Component } from "react";
import "./home.css";
import AOS from "aos";
class About extends Component {
  render() {
    return (
      <div className="container">
        <h2
          data-aos="fade-up"
          style={{
            fontFamily: "Bree Serif serif",
            textAlign: "center",
            marginTop: "100px"
          }}
        >
          <img src="https://img.icons8.com/color/48/000000/about.png" />
          <br />
          ABOUT US
        </h2>
        <h3
          data-aos="flip-down"
          data-aos-duration="900"
          style={{
            textAlign: "center",
            marginTop: "40px"
          }}
        >
          Hii! It is our pleasure to have made you smile and satisfy your hunger
          through our munching and snacking options.
        </h3>
        <h3
          data-aos="flip-down"
          data-aos-duration="900"
          style={{
            textAlign: "center",
            marginTop: "40px"
          }}
        >
          Happytrip is a team of dynamic youngsters who believe that snacks
          aren’t just snacks, but an integral part of happy and healthy living.
          Happytrip was born as a simple idea and has now carved its niche in
          Delhi NCR in 2019.
        </h3>
        <h3
          data-aos="flip-down"
          data-aos-duration="900"
          style={{
            textAlign: "center",
            marginTop: "40px"
          }}
        >
          We at happy trip strive to provide quality service to people
          travelling in Buses all over the country. Our mission is to make the
          best tireless efforts to make your trip comfortable and memorable. We
          understand that every customer has different snacking preferences.
          Hence, we aim to provide a wide variety of options ranging from
          eatables to drinks.
        </h3>
        <h3
          data-aos="flip-down"
          data-aos-duration="900"
          style={{
            textAlign: "center",
            marginTop: "40px"
          }}
        >
          We believe in providing consistent excellent services to our customers
          and we only partner with top trustable brands. We believe in 100%
          satisfaction of quality, rather than just taste, hence giving prime
          importance to healthy snacking options. The satisfaction of our
          clients is our prime goal.
        </h3>
        <h3
          data-aos="flip-down"
          data-aos-duration="900"
          style={{
            textAlign: "center",
            marginTop: "40px"
          }}
        >
          Our mission is to bridge the gap between travelling in a bus and
          searching for food options during travel. Putting in efforts to make
          our clients happy, going the extra mile for them and understanding
          their daily needs; Happy trip feels privileged to have made their
          journey fulfilling and comfortable.
        </h3>
      </div>
    );
  }
}

export default About;
