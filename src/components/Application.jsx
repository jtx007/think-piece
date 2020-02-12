import React, { Component } from 'react';
import { firestore, auth, createUserProfileDocument } from '../firebase'
import Posts from './Posts';
import Authentication from '../components/Authentication'

class Application extends Component {
  state = {
    user: null
  
  };

  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      const user = await createUserProfileDocument(userAuth) 
      this.setState({ user })
    })
  }

  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
  }

  
  handleCreate = async post => {
   firestore.collection('posts').add(post)
  };

  handleRemove = async id => {
    firestore.doc(`posts/${id}`).delete()
  }

  render() {
    const { user } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Authentication user={user} />
        <Posts  />
      </main>
    );
  }
}

export default Application;
