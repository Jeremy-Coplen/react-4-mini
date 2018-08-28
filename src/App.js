import React, { Component } from 'react';
import { HashRouter as Router, Link } from "react-router-dom"
import './App.css';

import routes from "./routes"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: ""
    }
  }

  render() {
    return (
      <Router>
        <div>
          <input type="text"
          onChange={e => this.setState({username: e.target.value})}/>
          <div>
            <Link to="/">Home</Link>
            <Link to="/route2">Route2</Link>
            <Link to={`/route3/${this.state.username}`}>Route3</Link>
          </div>
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
