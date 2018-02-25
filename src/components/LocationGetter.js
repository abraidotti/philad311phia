import React, { Component } from 'react';

class LocationGetter extends Component {
  constructor() {
    super();
    this.state = {
      querySubmitted: false,
      query: ''
    }
  }


handleChange(event) {
  this.setState({ value: this.state.query });
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
