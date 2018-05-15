import React, { Component} from 'react';

class Requests extends Component {
  render (){
    return (
      <div>
        <ul>
          {
            this.props.data.map((item, index) => <div key={index} className="container app-entry">
              <div className="row">
                <div className="column">
                  <img src={item.media_url} alt="media url"/>
                </div>
                <div className="column entry-info">
                  <p>Service Request ID: {item.service_request_id}</p>
                  <p>Address: {item.address}, {item.zipcode}</p>
                  <p>Service name: {item.service_name} (code: {item.service_code})</p>
                  <p>Agency Responsible: {item.agency_responsible}</p>
                  <p>Date Requested: {item.requested_datetime.replace(/(\d{4})-(\d{2})-(\d{2}).*/, '$3-$2-$1')}</p>
                  <p>Date Expected: {item.expected_datetime.replace(/(\d{4})-(\d{2})-(\d{2}).*/, '$3-$2-$1')}</p>
                  <p>Last Updated: {item.updated_datetime.replace(/(\d{4})-(\d{2})-(\d{2}).*/, '$3-$2-$1')}</p>
                  <p>Status: {item.status}</p>
                  <p>Status Notes: {item.status_notes}</p>
                </div>
              </div>
            </div>)
          }
        </ul>
      </div>
    );
  }
}

export default Requests;
