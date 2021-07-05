import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    );
  }
}

export default App;
