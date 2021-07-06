import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';

class App extends Component {
  render() {
    const user = { username: 'joao', password: 1234, };
    return (
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/strict-access">Strict Access</Link>
        <Switch>
          <Route path="/users/:id" render={ (props) => <Users {...props} greetingsMessage="Good Morning" />}/>
          <Route path="/strict-access" render={ (props) => <StrictAccess {...props} user={ user }/>} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
