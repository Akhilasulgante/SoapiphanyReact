import React, { Component } from "react";
import "../styles/Home.css";
import Natural from "../../src/images/Natural.png";

class Home extends Component {
  componentDidMount() {
    let arr = localStorage.getItem("comments-data");
    console.log("arr at start is", arr);

    if (arr === null) {
      localStorage.setItem("comments-data", JSON.stringify([]));
    }
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <img
            className="homeimagesleft"
            src="https://www.ruralsprout.com/wp-content/uploads/2019/12/melt-pour-soap.jpg"
            alt="No loading?"
          />
          <h1 className="hometextright">Welcome to Soapiphany</h1>
          <h3 className="hometextright">
            {" "}
            Made with care, everything we do is "for you, by hand".{" "}
          </h3>
        </div>
        <div className="NaturText">
          <th>
            We make more then soaps, we make earth a little better place. All
            the soaps at Soapiphany are created with 100% natural Ingredients,
            making them leave no harsh effect on your skin and environment
          </th>
        </div>
        <img
          className="homeimagesRight"
          src="https://blog.fnp.com/wp-content/uploads/2018/06/569758-environment.jpg"
          alt="Not loading?"
        />{" "}
        <img className="NaturalImage" src={Natural} alt="Not loadingg!" />
      </React.Fragment>
    );
  }
}

export default Home;
