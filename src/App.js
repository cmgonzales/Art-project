import React, { Component } from 'react';
import Nav from './nav'
import {S3} from './common/url'
import Headline from './components/headline'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
      
      <Headline
       title =  {12}
       imageSource = {'{S3}'}
      />
       
      </div>
    );
  }
}

export default App;
