import React, { Component } from 'react';
import './App.css';
import loggedIn from './authenticate/loggedIn';
import Login from './authenticate/Login';
import Logged from './authenticate/Logged';


const AnonComponent = loggedIn(Logged)(Login)

class App extends Component {
  constructor(){
    super()

    this.state = {
      logged: false,
    };
  }

  handleLogin = () => {
    this.setState({
      logged: true,
    })
  }

  render() {
    return (
      <AnonComponent logged={this.state.logged} handleLogin = {this.handleLogin}/>
    );
  }
}

export default App;
