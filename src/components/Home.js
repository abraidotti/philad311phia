import React, { Component} from 'react';
import LocationGetter from './LocationGetter';

class Home extends Component {
  render (){
    return (
      <div>
        <h1>Home</h1>
        <LocationGetter />
      </div>
    );
  }
}

export default Home;
