import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {}
    }
    this.getUserData = this.getUserData.bind(this);
  }

  getUserData() {
    axios.get('/auth/me').then((res) => {
      this.setState({
        userInfo: res.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <a href='http://localhost:3002/auth'><button>Log in</button></a>
        <button onClick={this.getUserData}>Get user info</button>
        <h3>User info:</h3>
        { JSON.stringify(this.state.userInfo, null, 2) }
      </div>
    );
  }
}

export default App;
