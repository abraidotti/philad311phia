import React, { Component} from 'react';

class About extends Component {
  render (){
    return (
      <div>
        <p>Let's see what Philly's 311 service has been up to by looking at the service entries with images attached.</p>
        <p>Made with React, React Router, and Philly's <a href="https://www.opendataphilly.org/dataset/311-service-and-information-requests">311 API</a>🧙‍♀️.</p>
        <p>Styled with <a href="https://milligram.io">Milligram</a>.</p>
      </div>
    );
  }
}

export default About;
