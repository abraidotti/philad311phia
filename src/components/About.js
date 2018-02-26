import React, { Component} from 'react';

class About extends Component {
  render (){
    return (
      <div className="container">
        <p>Let's see what Philly's 311 service has been up to by looking at all the entries with images attached.</p>
        <ul>
        <li>Made with React, React Router, and Philly's <a href="https://www.opendataphilly.org/dataset/311-service-and-information-requests">311 API</a>👍🏼.</li>
        <li>Styled with <a href="https://milligram.io">Milligram</a>.</li>
        <li>Inspired by a pile of trash on my street that persists to this day...</li>
      </ul>
      </div>
    );
  }
}

export default About;
