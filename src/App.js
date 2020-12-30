import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Home, Header, Teams, Owners, Venues, Players } from './Components'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {

  render() {
    return (
      <Router>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/Home' exact component={Home} />
        <Route path='/Players' exact component={Players} />
        <Route path='/Teams' exact component={Teams} />
        <Route path='/Venues' exact component={Venues} />
        <Route path='/Owners' exact component={Owners} />
      </Router >
    )
  }

}

export default App;


