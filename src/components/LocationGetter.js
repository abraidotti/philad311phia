import React, { Component } from 'react';

class LocationGetter extends Component {
  constructor() {
    super();
    this.state = {
      querySubmitted: false,
      query: '',
      data: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(event) {
  this.setState({ query: event.target.value });
}

handleSubmit(event) {
  let zip = this.state.query;
  this.setState ({ querySubmitted: true})
  console.log('query submitted: ' + zip)
  event.preventDefault();

   fetch(`https://phl.carto.com/api/v2/sql?q=SELECT%20*%20FROM%20public_cases_fc%20WHERE%20zipcode%20=%20%27${zip}%27%20AND%20media_url%20NOT%20LIKE%20%27%27%20LIMIT%203`)
    .then(response => {
      if (response.ok) { return response.json() }
    })
    .then(data => {
      console.log(data.rows)
      this.setState ({ data: data.rows})
      console.log(this.state.data)
    })
}

render() {
  return (
    <div>
    <form onSubmit={this.handleSubmit}>
      <label>
        Philly Zip code pls:
        <input type="text" value={this.state.query} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
  )
}
}
export default LocationGetter;
