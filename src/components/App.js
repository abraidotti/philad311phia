import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css';

import About from './nav/About';
import Contact from './nav/Contact';
import Home from './nav/Home';
import NavBar from './nav/NavBar';
import Footer from './nav/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <NavBar />
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/" component={Home} />
            </Switch>
          </Fragment>
        </Router>
      <Footer />
      </div>
    )
  }
}

export default App;
