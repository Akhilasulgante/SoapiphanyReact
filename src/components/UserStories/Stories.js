import React, { Component, createRef } from "react";
import PropTypes from "prop-types";

export default class Stories extends Component {
  constructor(props) {
    super(props);

    this.storyForm = createRef();

    this.onCreateStories = this.onCreateStories.bind(this);
  }

  onCreateStories(e) {
    console.log("adding?");
    //this.addStories();
    e.preventDefault();

    const stoForm = new FormData(this.storyForm.current);

    console.log("create Publication title=", stoForm.get("title"));

    let soapName = stoForm.get("soapName"),
      soapStory = stoForm.get("soapStory");

    this.props.onCreateStories(soapName, soapStory);
  }

  render() {
    return (
      <React.Fragment>
        <h2>Share your stories with soap making</h2>
        <label>Soap Name</label>
        <form ref={this.storyForm}>
          <input type="text" name="soapName" />
          <br />
          <input type="text" name="soapStory" />

          <button type="submit" onClick={this.onCreateStories}>
            Share
          </button>
        </form>
      </React.Fragment>
    );
  }
}

Stories.propTypes = {
  onCreateStories: PropTypes.func.isRequired,
};
