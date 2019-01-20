import React, { Component } from 'react';
import Nav from './nav'

import Portolio from './components/Portfolio'


import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
       
        <Portolio
          information="San francisco crime API in React | Heroku deployment"
        />
        <Portolio
          information="San francisco crime API in React | Heroku deployment"
        />
      </div>
    );
  }
}

export default App;


