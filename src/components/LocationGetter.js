import React, {Component} from 'react';

const allowedZips = [ '19019','19099', '19101', '19102', '19103', '19104',
'19105', '19106', '19107', '19109', '19110', '19111', '19112', '19114', '19115',
'19116', '19118', '19119', '19120', '19121', '19122', '19123', '19124', '19125',
'19126', '19127', '19128', '19129', '19130', '19131', '19132', '19133', '19134',
'19135', '19136', '19137', '19138', '19139', '19140', '19141', '19142', '19143',
'19144', '19145', '19146', '19146', '19147', '19148', '19149', '19150', '19151',
'19152', '19153', '19154', '19155', '19170', '19173', '19176', '19187', '19192' ]

class LocationGetter extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      query: '',
      buttonState: 'invisible',
      data: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    this.setState({query: event.target.value});
    if (allowedZips.indexOf(event.target.value) > -1) {
      this.setState({buttonState: 'visible'});
    } else {
      this.setState({buttonState: 'invisible'});
    }
  };

  handleSubmit(event) {
    let zip = this.state.query;
    this.setState({isLoading: true})
    event.preventDefault();

    fetch(`https://phl.carto.com/api/v2/sql?q=SELECT%20*%20FROM%20public_cases_fc%20WHERE%20zipcode%20=%20%27${zip}%27%20AND%20media_url%20NOT%20LIKE%20%27%27%20LIMIT%203`).then(response => {
      if (response.ok) {
        return response.json()
      }
    }).then(data => {
      console.log(data.rows)
      this.setState({data: data.rows})
      this.setState({isLoading: false})
    });
  };

  render() {
    if (this.state.isLoading)
      return <div className="loading">loading...</div>
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <span>Philly Zip code pls:</span>
          <input type="text" value={this.state.query} onChange={this.handleChange}/>
          <input className={this.state.buttonState} type="submit" value="Submit"/>
        </form>
      <div>
        <ul>
          {
            this.state.data.map((item, index) => <div key={index} className="container app-entry">
              <div className="row">
                <div className="column">
                  <img src={item.media_url} alt="media url"/>
                </div>
                <div className="column entry-info">
                  <p>Service Request ID: {item.service_request_id}</p>
                  <p>Address: {item.address}, {item.zipcode}</p>
                  <p>Service name: {item.service_name}
                    (code: {item.service_code})</p>
                  <p>Agency Responsible: {item.agency_responsible}</p>
                  <p>Date Requested: {item.requested_datetime.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$3-$2-$1')}</p>
                  <p>Date Expected: {item.expected_datetime.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$3-$2-$1')}</p>
                  <p>Last Updated: {item.updated_datetime.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$3-$2-$1')}</p>
                  <p>Status: {item.status}</p>
                  <p>Status Notes: {item.status_notes}</p>
                </div>
              </div>
            </div>)
          }
        </ul>
      </div>
    </div>)
  };
};

LocationGetter.defaultProps = {
  zip: '19146'
};

export default LocationGetter;
