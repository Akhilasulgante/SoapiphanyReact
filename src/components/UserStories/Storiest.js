import React, { Component } from "react";

class Storiest extends Component {
  userComment;

  constructor(props) {
    super(props);
    this.state = {
      SName: "",
      SStory: "",
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeStory = this.onChangeStory.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  onChangeName = (event) => {
    this.setState({ SName: event.target.value });
  };

  onChangeStory = (event) => {
    this.setState({ SStory: event.target.value });
  };

  submitData = () => {
    let commentsArr = JSON.parse(localStorage.getItem("comments-data"));
    console.log("commentsArr", typeof commentsArr);
    commentsArr.push({
      SName: this.state.SName,
      Story: this.state.SStory,
    });

    localStorage.setItem("comments-data", JSON.stringify(commentsArr));

    this.setState({
      SName: "",
      SStory: "",
    });
  };

  render() {
    let arr = JSON.parse(localStorage.getItem("comments-data"));
    console.log("arr type is", Object.keys(arr).length);
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center" }}>
          Please join our community by sharing your stories or feedback
        </h1>
        <label>Soap name</label>
        <br />
        <input
          type="text"
          name="SName"
          value={this.state.SName}
          onChange={(e) => this.onChangeName(e)}
        />
        <br />
        <br />
        <label>Story/feedback</label>
        <br />
        <input
          type="text"
          name="SStory"
          value={this.state.SStory}
          onChange={(e) => this.onChangeStory(e)}
        />
        <button onClick={() => this.submitData()}>Submit</button>
        <br />
        <br />
        <br />
        <div>
          <label>User's echo</label>
          <br />
          {arr.map((e) => {
            return (
              <div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p>Name: </p>
                  <p>{e.SName}</p>
                </div>

                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p>Comment: </p>
                  <p>{e.Story}</p>
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Storiest;
