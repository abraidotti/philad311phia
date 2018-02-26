import React, { Component } from 'react';

class LocationGetter extends Component {
  constructor() {
    super();
    this.state = {
      querySubmitted: false,
      query: '',
      data: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    this.setState({ query: event.target.value });
  };

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
        console.log(data.rows[0].service_request_id)
      });
  };

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          <span>Philly Zip code pls:</span>
          <input type="text" value={this.state.query} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
        <ul>
          {
            this.state.data.map((item, index) =>
            <div key={index} className="container app-entry">
              <div className="row">
                <div className="column">
                  <img src={item.media_url} alt="media url"/>
                </div>
                <div className="column">
                  <p>service_request_id: {item.service_request_id}</p>
                  <p>object id: {item.objectid}</p>
                  <p>address: {item.address}, {item.zipcode}</p>
                  <p>Service name: {item.service_name}
                    (code: {item.service_code})</p>
                  <p>agency responsible: {item.agency_responsible}</p>
                  <p>requested_datetime: {item.requested_datetime}</p>
                  <p>expected_datetime: {item.expected_datetime}</p>
                  <p>time updated in database: {item.updated_datetime}</p>
                  <p>service_notice: {item.service_notice}</p>
                  <p>status: {item.status}</p>
                  <p>status_notes: {item.status_notes}</p>
                </div>
              </div>
            </div>
          )}
        </ul>
      </div>
    </div>
    )
  };
};

export default LocationGetter;
