import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import HelloWorld from './components/HelloWorld'
import Wedding from './components/Wedding'
import Photos from './pages/Photos'
import Rsvp from './pages/Rsvp'
import history from './history'


class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HelloWorld} />
          <Route exact path="/wedding" component={Wedding} />
          <Route exact path="/photos" component={Photos} />
          <Route exact path="/rsvp" component={Rsvp} />
        </Switch>
      </Router>
    )
  }
}

export default App
