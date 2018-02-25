import React, { Component } from 'react';

import About from './About';
import Contact from './Contact';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Contact />
      </div>
    )
  }
}

export default App;
