import React, { Component } from 'react';
import { firestore } from '../firebase'
import Posts from './Posts';
import Authentication from './Authentication'
import { Switch, Route, Link} from 'react-router-dom'
import UserProfile from './UserProfile'
import PostPage from './PostPage'
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
        <Link to="/"><h1>Think Piece</h1></Link>
        <Authentication  />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/posts/:id" component={PostPage} /> 
        </Switch>
      </main>
    );
  }
}

export default Application;
