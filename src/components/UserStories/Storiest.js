import React, { Component } from "react";

class Storiest extends Component {
  userComment;

  constructor(props) {
    super(props);

    //let comments = JSON.parse(localStorage.getItem("user"));

    this.state = {
      comments: [
        {
          SName: "",
          SStory: "",
        },
      ],
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeStory = this.onChangeStory.bind(this);
  }

  onChangeName = (event) => {
    //console.log("calling?");
    this.setState({ SName: event.target.value });
  };

  onChangeStory = (event) => {
    //console.log("calling?");
    this.setState({ SStory: event.target.value });
  };

  handleFormSubmit(event) {
    event.preventDefault();
    this.userComment = JSON.parse(localStorage.getItem("user"));
    console.log(this.userComment);
    console.log("Calling?");
  }
  componentDidMount() {
    localStorage.setItem("comments", JSON.stringify("user"));
    // if (localStorage.getItem("user")) {
    //   this.setState({
    //     SName: this.userData.SName,
    //     SStory: this.userData.SStory,
    //   });
    // } else {
    //   alert("Please input all feilds");
    // }
  }

  componentDidUpdate(nextProps, nextState) {
    localStorage.setItem("user", JSON.stringify(nextState));
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleFormSubmit}>
          <label>SoapName</label>
          <br />
          <input
            type="text"
            name="SName"
            value={this.state.SName}
            onChange={this.onChangeName}
          />
          <br />
          <label>Story</label>
          <br />
          <input
            type="text"
            name="SStory"
            value={this.state.SStory}
            onChange={this.onChangeStory}
          />
          <button type="submit">Submit</button>
        </form>
        <br />
        <br />
        <br />
        <div>
          <label>Feedback</label>
          <br />
          <label>Name :</label>
          <h5>{localStorage.getItem("user.SName")}</h5>
          <label>STory :</label>
          <p>{localStorage.getItem("user.SStory")}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Storiest;
