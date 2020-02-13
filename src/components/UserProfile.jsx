import React, { Component } from "react";
import { firestore, auth, storage } from "../firebase";

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

    if (this.imageInput) {
        storage.ref().child('user-profiles').child(auth.currentUser.uid).child(this.imageInput.name).put(this.imageInput.files[0])
        .then(response => response.ref.getDownloadURL())
        .then(photoURL => firestore.doc(`users/${auth.currentUser.uid}`).update({ photoURL}))
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
          <input name="profilepicture" type="file" ref={ref => this.imageInput = ref} />
          <input  className="update"  type="submit" />
        </form>
      </section>
    );
  }
}

export default UserProfile;
