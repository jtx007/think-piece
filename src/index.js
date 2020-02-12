import React from 'react';
import { render } from 'react-dom';
import PostsProvider from '../src/providers/PostsProvider'
import UserProvider from '../src/providers/UserProvider'
import './index.scss';

import Application from './components/Application';

render(<PostsProvider><UserProvider><Application /></UserProvider></PostsProvider>, document.getElementById('root'));
