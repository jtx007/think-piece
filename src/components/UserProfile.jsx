import React, { Component } from "react";
import { firestore, auth } from "../firebase";

class UserProfile extends Component {
  state = { displayName: "" };
  imageInput = null;

 

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { displayName } = this.state;
    if (displayName) {
      firestore.doc(`users/${auth.currentUser.uid}`).update({ displayName });
    }
  };

  render() {
    const { displayName } = this.state;

    return (
      <section className="UserProfile">
        <form onSubmit={this.handleSubmit}>
          <input
            value={displayName}
            onChange={this.handleChange}
            type="text"
            name="displayName"
          />
          <input type="file" ref={ref => this.imageInput = ref} />
          <input className="update"  type="submit" />
        </form>
      </section>
    );
  }
}

export default UserProfile;
