import React, { Component} from 'react';

class Requests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      requestsPerPage: 5
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  };

  render() {
    const currentPage = this.state.currentPage;
    const requestsPerPage = this.state.requestsPerPage;

    // Logic for displaying requests
    const indexOfLastRequest = currentPage * requestsPerPage;
    const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
    const currentRequests = this.props.data.slice(indexOfFirstRequest, indexOfLastRequest);

    const renderRequests = currentRequests.map( (item, index) =>
        <div key={index} className="container app-entry">
          <div className="row">
            <div className="column">
              <img src={item.media_url} alt="media url"/>
            </div>
            <div className="column entry-info">
              <p>Service Request ID: {item.service_request_id}</p>
              <p>Address: {item.address}, {item.zipcode}</p>
              <p>Service name: {item.service_name} (code: {item.service_code})</p>
              <p>Agency Responsible: {item.agency_responsible}</p>
              <p>Date Requested:
                {item.requested_datetime.replace(/(\d{4})-(\d{2})-(\d{2}).*/, '$3-$2-$1')}
              </p>
              <p>Date Expected:
                {item.expected_datetime.replace(/(\d{4})-(\d{2})-(\d{2}).*/, '$3-$2-$1')}
              </p>
              <p>Last Updated:
                {item.updated_datetime.replace(/(\d{4})-(\d{2})-(\d{2}).*/, '$3-$2-$1')}
              </p>
              <p>Status: {item.status}</p>
              <p>Status Notes: {item.status_notes}</p>
            </div>
          </div>
      </div>
    );

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.data.length / requestsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li key={number} id={number} onClick={this.handleClick}>
            {number}
          </li>
        )
    });

    const page = pageNumbers.length > 1 ? <span>page: </span> : '';
    const pagination = pageNumbers.length > 1 ? (renderPageNumbers) : ('');

    return (
      <div>
        <ul className="paginated">
          {page}
          {pagination}
        </ul>
        {renderRequests}
        <ul className="paginated">
          {page}
          {pagination}
        </ul>
      </div>
    );
  }
}

export default Requests;
