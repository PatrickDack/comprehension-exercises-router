import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route path="/users">
          <Users greetingsMessage="Good Morning" />
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
