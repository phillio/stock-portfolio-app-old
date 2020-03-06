import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  checkLogin = () => {
    console.log("don't ")
  }

  render() {
    return (
      <div className="App">
        <p>Stock Portfolio App</p>
      </div>
    );
  }
}

export default App;
