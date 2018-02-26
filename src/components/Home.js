import React, { Component} from 'react';
import LocationGetter from './LocationGetter';

class Home extends Component {
  render (){
    return (
      <div>
        <LocationGetter />
      </div>
    );
  }
}

export default Home;
