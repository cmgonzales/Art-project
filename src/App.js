import React, { Component } from 'react';
import Nav from './nav'

import Headline from './components/headline'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
      <Headline className = "header"
       title =  {12}
  
      />
    
       
      </div>
    );
  }
}

export default App;
