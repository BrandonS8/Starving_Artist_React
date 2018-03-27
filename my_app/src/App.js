import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import axios from 'axios'
import data from 'data.json'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="navBar">
            <nav>
              <Link to="/">
                <h1>Starving Artist</h1>
              </Link>
              <h5>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </h5>
            </nav>
          </div>
          <Switch>
            <LandingPage store={data} />
            <Route path="/store" component={Store} />
            <Route path="/store/show" component={Show} />
            <Route path="/store/add" component={Add} />
            <Route path="/store/edit" component={Edit} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
