import React, { Component } from "react";

class Stories extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  //   state = {};

  createStories() {
    this.addStories();
  }

  render() {
    return (
      <React.Fragment>
        <h2>Share your stories with soap making</h2>
        <label>Soap Name</label>
        <form>
          <input type="text" />

          <input type="submit" value="Add" />
        </form>
        {/* remove this later */}
        {/* <br />
        <br />
        <label>experience</label>
        <input type="text" /> <br /> */}
      </React.Fragment>
    );
  }
}

export default Stories;
