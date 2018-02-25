import React, { Component } from 'react';

class LocationGetter extends Component {
  constructor() {
    super();
    this.state = {
      querySubmitted: false,
      query: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(event) {
  this.setState({ query: event.target.value });
}

handleSubmit(event) {
  console.log('query submitted: ' + this.state.query)
  event.preventDefault();
}

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Philly Zip code pls:
        <input type="text" value={this.state.query} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
}
export default LocationGetter;
