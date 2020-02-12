import React, { Component } from 'react';
import { firestore } from '../firebase'
import Posts from './Posts';
import Authentication from '../components/Authentication'

class Application extends Component {
  

  
  handleCreate = async post => {
   firestore.collection('posts').add(post)
  };

  handleRemove = async id => {
    firestore.doc(`posts/${id}`).delete()
  }

  render() {

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Authentication  />
        <Posts  />
      </main>
    );
  }
}

export default Application;
