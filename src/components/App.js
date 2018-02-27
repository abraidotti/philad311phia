import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css';

import About from './About';
import Contact from './Contact';
import Home from './Home';
import NavBar from './NavBar';
import Footer from './Footer';

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
