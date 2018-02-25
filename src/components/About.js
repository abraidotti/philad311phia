import React, { Component} from 'react';

class About extends Component {
  render (){
    return (
      <div>
        <h1>About</h1>
        <p>Let's see what Philly's 311 service has been up to!</p>
        <p>Made with React, React Router, and Philly's <a href="https://www.opendataphilly.org/dataset/311-service-and-information-requests">311 dataset API</a>.</p>
      </div>
    );
  }
}

export default About;
