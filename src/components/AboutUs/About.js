import React, { Component } from "react";
import "../../styles/About.css";

/**
 * Class About - Displays Company information in About US tab on NavBar
 */
class About extends Component {
  state = {};
  /**
   * Component displays About, mission and vision of the company
   *
   * @return  {array}  [Returns HTML code to display information]
   */
  render() {
    return (
      <React.Fragment>
        <div>
          <img
            className="general-soap-img"
            src="https://artisansoapworks.com.au/wp-content/uploads/2019/05/artisan-soap-works_1.jpg"
            alt="Not showing?"
          />
        </div>
        <div>
          <h3>About Soapiphany</h3>
          <p>
            Soapiphany is an all-natural handcrafted artisan soap company
            specializing in making every product one batch at a time. No two
            batches are exactly alike, encouraging us to think of our all our
            products as works of art! All of our soaps are made from scratch,
            using the timeless cold-processed soap making method. Our family of
            two, along with our large extended family and friends,
            enthusiastically test our products before we bring them to you.
            Every product we offer was created with a specific need in mind from
            a family member or friend. When formulating each product, we only
            use the finest natural ingredients directly from nature. You won’t
            find any ingredient listed in our products that we wouldn’t apply on
            our own skin! We are confident that you will find Soapiphany Soap
            products to be the richest, most indulgent skincare you have ever
            experienced.
          </p>
        </div>
        <div>
          <h4>Our Mission</h4>
          <p>
            Soapiphany aims to provide the highest quality Artisan soaps to all
            its consumers
          </p>
          <h4>Our Vision</h4>
          <p>
            Making a little difference at a time to make earth free of harmful
            chemicals
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
