import { Component } from "react";
import CreatePublicationForm from "../components/CreatePublicationForm.js";
import PublicationsGallery from "../components/PublicationsGallery.js";
import PublicationManager from "../models/PublicationManager.js";

import { StoriesArray } from "../../components/UserStories/StoriesArray";

class CreateStories extends Component {
  constructor(props) {
    // call the constructor of Component
    super(props);
    this.pm = new PublicationManager();
    this.state = {
      StoriesArray: [],
    };
    this.onCreatePublication = this.onCreatePublication.bind(this);

    console.log("constructor");
  }

  componentDidMount() {
    console.log("CDM getting publications");
    this.getPublicationsAndRender();
    console.log("done getting publications?");
  }

  /**
   * Queries the PM for the current list of publications, then changes the state to the component re renders
   */
  getPublicationsAndRender() {
    this.pm.getPublications((publications) => {
      console.log("got publications");
      this.setState({
        StoriesArray,
      });
    });
  }

  onCreatePublication(title, author) {
    this.pm.addPublication({ title, author }, (res) => {
      console.log("The pub was inserted", res);

      this.getPublicationsAndRender();
    });
  }

  render() {
    console.log("render", this.state);
    return (
      <div className="App">
        <div>
          <BasePage>
            <h1>Publication Manager</h1>
            <div className="mb-5">The place to control your publications</div>
            <hr />

            <CreatePublicationForm
              onCreatePublication={this.onCreatePublication}
            ></CreatePublicationForm>

            <PublicationsGallery
              publications={this.state.publications}
            ></PublicationsGallery>

            <ClickableTable></ClickableTable>
          </BasePage>
        </div>
      </div>
    );
  }
}

export default CreateStories;
